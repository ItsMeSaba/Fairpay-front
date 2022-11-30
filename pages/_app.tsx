import '../styles/globals.sass'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Header } from 'components/header'
import { useEffect, useState } from 'react';
import AuthPopup from 'components/popups/authPopup';
import { SliderMenu } from 'components/sliderMenu';
import { GlobalContext } from 'context';
import cacheUserData from 'database/functions/user/getUserCachableData';
import TestModeInfo from 'components/testModeInfo';
import Head from "next/head"
import Footer from 'components/footer';
import SubmitSalary from 'components/popups/submitSalary';
import SubmitReview from 'components/popups/submitReview';
import { PopupData } from 'types';
import { Types } from 'mongoose';
import useCheckAuth from 'hooks/useCheckAuth';
import { ToastContainer } from 'react-toastify';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }: AppProps) {
	const [displayAuthPopup, setDisplayAuthPopup] = useState(false);
	const [salaryPopup, setSalaryPopup] = useState(new PopupData());
	const [reviewPopup, setReviewPopup] = useState(new PopupData());
	const [openSliderMenu, setOpenSliderMenu] = useState(false);
	const authData = useCheckAuth();

	useEffect(() => {
		const { user } = authData;

		if (user?.id) {
			cacheUserData(user.id);
		}
	}, [authData?.user?.id])

  	return (
		<>
			<Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

			<Script strategy="lazyOnload">
				{`
				var host = window.location.hostname;
				if(host != "localhost")
				{
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
						page_path: window.location.pathname,
					});
				}
				`}
			</Script>

			<Head>
				<title>Fairpay</title>
				<meta property="og:title" content="Fairpay" key="title" />
				<meta property="og:image" content="https://ibb.co/0VSgntz" />
				<meta name="keywords" content="დეველოპერი, პროგრამისტი, ანაზღაურება, ხელფასი" />
			</Head> 
			
			<GlobalContext.Provider value={{
				openAuthPopup: () => setDisplayAuthPopup(true),
				openReviewPopup: (companyName: string, companyId: Types.ObjectId) => setReviewPopup(new PopupData(true, companyName, companyId)),
				openSalaryPopup: (companyName: string, companyId: Types.ObjectId) => setSalaryPopup(new PopupData(true, companyName, companyId)),
				authData
			}}>
				<ToastContainer />
				
				<TestModeInfo />

				<div className="fullHeightContainer">
					<Header openAuth={() => setDisplayAuthPopup(true)} openSliderMenu={() => setOpenSliderMenu(true)} />

					<SliderMenu openAuthPopup={() => setDisplayAuthPopup(true)} closeSlider={() => setOpenSliderMenu(false)} openSlider={openSliderMenu} />

					{ displayAuthPopup && <AuthPopup closeAuth={() => setDisplayAuthPopup(false)} /> }

					{ salaryPopup.display && <SubmitSalary companyId={salaryPopup.companyId} companyName={salaryPopup.companyName} close={() => setSalaryPopup(new PopupData())} /> }

					{ reviewPopup.display && <SubmitReview companyId={reviewPopup.companyId} companyName={reviewPopup.companyName} close={() => setReviewPopup(new PopupData())} /> }
					
					{/* <div className="test" style={{ transform: `translateY(${reviewPopup.display ? "0" : "-100vh"})`, opacity: reviewPopup.display ? 1 : 0 }}>
						<SubmitReview companyId={reviewPopup.companyId} companyName={reviewPopup.companyName} close={() => setReviewPopup(new PopupData())} />
					</div> */}
					

					<Component {...pageProps} openAuthPopup={() => setDisplayAuthPopup(true)} />

					<Footer />
				</div>
			</GlobalContext.Provider>
		</>
  	)	
}

function MyAppWrapper(props: AppProps) {
	return (
		// <SessionProvider session={props.pageProps.session} refetchInterval={5 * 60}>
		<MyApp {...props} />
		// </SessionProvider>
	)
}

export default MyAppWrapper	 