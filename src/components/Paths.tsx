import OTPForm from "./OTPForm";
import { PageNotFound } from "./PageNotFound";
import { SlidingDiv } from "./SlidingDiv";

export const Paths = [
    {
        shortPathName:"",
        longPathName:"/",
        title:"Sliding Division",
        component: <SlidingDiv/>
    },
    {
        shortPathName:"otp-form",
        longPathName:"/otp-form",
        title:"OTP Form",
        component: <OTPForm digit={4}/>
    },
    {
        shortPathName:"page-not-found",
        longPathName:"/page-not-found",
        title:"Page Not Found",
        component: <PageNotFound/>
    }
]