interface LightProps {
    exception?: boolean;
}

// export default function ScanButtonLight( {exception=false}: LightProps) {
//     const colorFill = exception ? '#EC1C24' : "#00B050";

//     return(
//         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
//             <g filter="url(#filter0_f_49_203)">
//                 <circle cx="8" cy="8" r="4" fill={colorFill}/>
//             </g>
//             <g filter="url(#filter1_f_49_203)">
//                 <circle cx="8" cy="8" r="4" fill={colorFill}/>
//             </g>
//             <defs>
//                 <filter id="filter0_f_49_203" x="3" y="3" width="10" height="10" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                 <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//                 <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
//                 {/* <feGaussianBlur stdDeviation="0.5" result="effect1_foregroundBlur_49_203"/> */}
//                 </filter>
//                 <filter id="filter1_f_49_203" x="0" y="0" width="16" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
//                 <feFlood floodOpacity="0" result="BackgroundImageFix"/>
//                 <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
//                 <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_49_203"/>
//                 </filter>
//             </defs>
//         </svg>
//     );
// }


export default function ScanButtonLight( {exception=false}: LightProps) {
    const colorFill = exception ? '#EC1C24' : "#00B050";

    const blurStyle1 = {
        filter: "blur(0.5px)"
    };
    const blurStyle2 = {
        filter: "blur(2px)"
    };

    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="4" fill={colorFill} style={blurStyle1} />
            <circle cx="8" cy="8" r="4" fill={colorFill} style={blurStyle2} />
        </svg>
    );
}