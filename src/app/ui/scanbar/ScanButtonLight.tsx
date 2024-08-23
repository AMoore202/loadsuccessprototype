interface LightProps {
    exception?: boolean;
}

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