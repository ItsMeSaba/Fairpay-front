import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { SessionProvider, useSession } from 'next-auth/react'
import { Header } from 'components/header'
import { useEffect, useState } from 'react';
import AuthPopup from 'components/popups/authPopup';
import { SliderMenu } from 'components/sliderMenu';
import { createContext } from 'react';
import { GlobalContext } from 'context';
import cacheUserData from 'database/functions/user/getUserCachableData';
// import { SliderMenu } from 'components/sliderMenu';

// function MyApp({ Component, pageProps }: AppProps) {

function MyApp({ Component, pageProps }: AppProps) {
	const [displayAuthPopup, setDisplayAuthPopup] = useState(false);
	const [openSliderMenu, setOpenSliderMenu] = useState(false);
	const { data: userData } = useSession();

	useEffect(() => {
		console.log("USEREFFECT RAN", userData?.user);
		if (userData?.user) {
			console.log("CACHE HAPPENED")
			cacheUserData(userData.user.userId);
		}
	}, [userData])

  	return (
	    // <SessionProvider session={pageProps.session} refetchInterval={5 * 60}>
			<GlobalContext.Provider value={{
				openAuthPopup: () => setDisplayAuthPopup(true)
			}}>
				
				<Header openAuth={() => setDisplayAuthPopup(true)} openSliderMenu={() => setOpenSliderMenu(true)} />

				<SliderMenu openAuthPopup={() => setDisplayAuthPopup(true)} closeSlider={() => setOpenSliderMenu(false)} openSlider={openSliderMenu} />
				{ displayAuthPopup && <AuthPopup closeAuth={() => setDisplayAuthPopup(false)} /> }

				<Component {...pageProps} openAuthPopup={() => setDisplayAuthPopup(true)} />
			</GlobalContext.Provider>
		// </SessionProvider>
  	)	
}

function MyAppWrapper(props: AppProps) {
	return (
		<SessionProvider session={props.pageProps.session} refetchInterval={5 * 60}>
			<MyApp {...props} />
		</SessionProvider>
	)
}

// export default MyApp
export default MyAppWrapper	 