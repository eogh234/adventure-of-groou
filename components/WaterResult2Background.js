import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "./Responsive";

export default function WaterResult2Background(props) {

    const background_forest = `<svg width="1080" height="1920" viewBox="0 0 1080 1920" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1080 0H0V1920H1080V0Z" fill="#00F4ED"/>
    <g clip-path="url(#clip0)">
    <path d="M359.75 170.294C359.751 179.972 357.015 189.453 351.856 197.641C346.697 205.829 339.326 212.39 330.596 216.566C321.866 220.743 312.132 222.364 302.52 221.242C292.907 220.12 283.808 216.302 276.274 210.227C267.745 217.454 257.073 221.669 245.908 222.221C234.743 222.774 223.706 219.632 214.506 213.282C206.012 219.144 195.936 222.284 185.616 222.284C175.295 222.284 165.219 219.144 156.725 213.282C149.099 218.549 140.177 221.629 130.926 222.191C121.674 222.752 112.446 220.772 104.239 216.466C96.0316 212.159 89.1585 205.69 84.3632 197.759C79.568 189.828 77.0332 180.736 77.0332 171.468C77.0332 162.199 79.568 153.108 84.3632 145.176C89.1585 137.245 96.0316 130.776 104.239 126.47C112.446 122.164 121.674 120.184 130.926 120.745C140.177 121.306 149.099 124.387 156.725 129.653C165.219 123.791 175.295 120.652 185.616 120.652C195.936 120.652 206.012 123.791 214.506 129.653C223.449 123.482 234.133 120.337 244.993 120.676C255.853 121.016 266.32 124.823 274.86 131.54C282.29 125.097 291.415 120.926 301.149 119.524C310.883 118.122 320.815 119.548 329.761 123.632C338.707 127.716 346.291 134.286 351.608 142.559C356.925 150.832 359.752 160.459 359.751 170.293L359.75 170.294Z" fill="url(#paint0_linear)"/>
    <path d="M214.749 170.935V152.379H205.648V155.825L203.085 156.046V152.379H177.417V159.845H185.811V161.348L174.457 168.505L179.581 174.602L190.626 167.754L200.346 172.834L205.029 166.561L195.133 161.348V159.845H200.7V163.954L205.648 163.512V171.862L214.749 170.935ZM205.692 191.037C211.745 191.037 215.588 187.458 215.588 181.847C215.588 175.794 211.7 172.216 205.692 172.658L189.389 173.85C183.425 174.292 179.537 177.297 179.537 182.466C179.537 187.635 183.381 191.037 189.389 191.037H205.692ZM203.969 180.433C205.294 180.345 206.62 180.522 206.664 181.494C206.708 182.466 205.383 182.686 204.057 182.731L191.157 183.438C189.831 183.438 188.462 183.482 188.417 182.51C188.373 181.538 189.743 181.361 191.068 181.273L203.969 180.433ZM260.982 165.589V156.576L256.299 157.106V152.379H247.198V163.468L229.084 165.059V159.713H244.193V152.379H220.027V173.32L247.198 170.537L256.299 169.609V166.119L260.982 165.589ZM256.299 190.285V170.758L247.198 171.686V173.762L231.69 175.529V173.188L222.589 174.116V190.285H256.299ZM247.198 181.67L231.69 182.996V181.803L247.198 180.036V181.67Z" fill="#1F1A57"/>
    </g>
    <path d="M136.8 365.125V359.9H108.695V357.095H135.095V344.665H121.895V340.98H140.925V336.14H96.65V340.98H115.46V344.665H101.985V349.725H128.66V352.585H102.315V365.125H136.8ZM135.04 332.895V317.275H102.535V332.895H135.04ZM128.495 327.835H108.97V322.225H128.495V327.835ZM188.513 358.47V353.355H166.568V336.855H160.133V353.355H144.238V358.47H188.513ZM183.453 320.63H148.968V325.8H176.963C177.128 332.565 176.743 341.97 175.203 347.635L181.363 348.405C183.068 341.915 183.673 332.95 183.453 320.63ZM232.361 365.345V316.34H225.926V365.345H232.361ZM217.291 321.455H194.411V326.79H210.361C209.481 336.525 202.166 346.755 191.441 351.65L195.401 356.49C210.361 348.35 216.906 336.25 217.291 321.455ZM284.789 340.485V335.15H277.694V316.34H271.314V365.345H277.694V340.485H284.789ZM264.824 321.345H241.944V326.68H257.839C256.959 336.47 249.644 346.755 238.974 351.65L242.879 356.49C257.894 348.35 264.384 336.14 264.824 321.345ZM346.77 331.685V326.405H339.785V316.34H333.295V341.09H339.785V331.685H346.77ZM341.27 364.96V359.79H314.21V356.6H339.785V343.565H307.445V348.68H333.295V351.925H307.775V364.96H341.27ZM330.16 335.865C324.385 334.05 318.83 328.66 318.83 321.125V317.825H312.23V321.455C312.23 328.825 307.555 334.49 300.46 337.075L304.255 341.915C308.82 340.375 314.1 335.92 315.585 330.915C317.73 335.48 322.79 339.22 326.585 340.65L330.16 335.865ZM393.313 358.47V353.355H371.368V336.855H364.933V353.355H349.038V358.47H393.313ZM388.253 320.63H353.768V325.8H381.763C381.928 332.565 381.543 341.97 380.003 347.635L386.163 348.405C387.868 341.915 388.473 332.95 388.253 320.63ZM424.181 330.805C424.181 323.93 418.406 318.98 411.146 318.98C403.886 318.98 398.166 324.04 398.166 330.805C398.166 337.68 403.996 342.245 411.146 342.245C418.461 342.245 424.181 337.68 424.181 330.805ZM437.656 365.455L441.451 360.725C436.446 358.965 432.541 354.07 432.541 348.02V345.875H426.216V348.02C426.216 354.18 422.916 359.295 417.086 361.99C418.516 363.42 419.836 364.905 421.266 366.39C425.336 364.465 428.581 360.12 429.461 356.93C430.561 360.065 434.576 364.135 437.656 365.455ZM430.671 316.34V343.62H437.106V316.34H430.671ZM416.591 360.505L420.551 356.16C417.361 354.95 414.721 351.815 414.721 347.415V346.04H408.451V347.58C408.451 353.85 404.656 358.525 398.991 361L402.786 365.675C406.691 364.135 410.816 359.625 412.026 355.94C412.796 357.7 414.996 359.735 416.591 360.505ZM417.966 330.75C417.966 334.38 415.106 337.295 411.146 337.295C407.186 337.295 404.381 334.49 404.381 330.75C404.381 327.285 407.076 324.315 411.146 324.315C415.436 324.315 417.966 327.175 417.966 330.75ZM472.208 343.565C471.878 341.97 471.603 340.32 471.328 338.67C466.268 339.77 460.053 340.1 453.068 340.1V325.14H468.413V319.97C461.153 319.97 453.948 320.025 446.633 320.025V345.27H451.363C460.108 345.27 467.533 344.665 472.208 343.565ZM484.693 351.87V316.34H478.258V329.1H466.103V334.27H478.258V351.87H484.693ZM485.738 364.025V358.91H458.788V348.405H452.463V364.025H485.738ZM551.57 333.17V327.89H544.585V316.34H538.095V344.94H544.585V333.17H551.57ZM545.19 355.39C545.19 349.285 539.085 345.435 528.36 345.435C517.855 345.435 511.75 349.285 511.75 355.39C511.75 361.44 517.855 365.345 528.36 365.345C539.085 365.345 545.19 361.44 545.19 355.39ZM538.59 355.39C538.59 358.415 534.85 360.23 528.36 360.23C521.98 360.23 518.295 358.415 518.295 355.39C518.295 352.42 521.98 350.605 528.36 350.605C534.85 350.605 538.59 352.42 538.59 355.39ZM530.89 319.695H508.065V325.03H523.74C522.31 333.28 513.84 338.34 505.7 340.045L508.89 345.16C522.035 341.42 530.835 333.115 530.89 319.695ZM594.318 365.345V316.34H587.938V365.345H594.318ZM555.213 337.24C555.213 347.525 559.888 354.675 567.863 354.675C575.893 354.675 580.568 347.47 580.568 337.24C580.568 326.9 575.893 319.695 567.863 319.695C559.888 319.695 555.213 326.9 555.213 337.24ZM574.408 337.24C574.408 344.94 571.658 349.505 567.863 349.505C564.178 349.505 561.483 344.94 561.483 337.24C561.483 329.485 564.178 324.865 567.863 324.865C571.658 324.865 574.408 329.485 574.408 337.24ZM138.67 441.345V392.34H132.565V411.755H128.935V393.22H122.94V439.09H128.935V416.87H132.565V441.345H138.67ZM120.19 398.005H110.62V403.34H114.305C114.36 414.01 111.72 422.48 105.945 429.575L111.06 432.765C118.21 422.315 120.245 413.57 120.19 398.005ZM108.805 398.005H97.915V403.34H102.865C102.865 412.36 100.5 419.675 95.11 425.835L100.06 429.08C106 421.435 108.86 413.075 108.805 398.005ZM183.618 394.155H167.778V399.215H177.128C177.128 402.02 176.688 407.63 175.313 412.36H162.168C163.653 407.19 164.423 399.82 164.423 394.155H148.308V399.215H157.933C157.933 403.45 156.888 409.115 155.733 412.36H144.238V417.53H188.513V412.36H181.638C182.958 406.31 183.618 399.875 183.618 394.155ZM185.323 436.56C177.348 435.515 169.593 430.455 169.593 424.075V422.04H162.993V424.075C162.993 430.62 155.843 435.625 147.153 436.45L150.013 441.675C157.273 440.74 164.148 435.845 166.293 431.555C168.713 435.845 175.753 440.63 182.463 441.675L185.323 436.56ZM233.516 441.345V392.34H227.411V412.14H223.341V393.22H217.346V439.09H223.341V417.31H227.411V441.345H233.516ZM214.266 421.16C214.266 415 209.921 410.985 203.541 410.985C197.271 410.985 192.816 414.945 192.816 421.16C192.816 426.99 197.216 431.335 203.541 431.335C209.921 431.335 214.266 427.32 214.266 421.16ZM191.771 409.17H215.146V404.055H191.771V409.17ZM208.491 421.16C208.491 424.13 206.401 426.275 203.541 426.275C200.736 426.275 198.646 424.24 198.646 421.16C198.646 418.135 200.736 416.045 203.541 416.045C206.401 416.045 208.491 418.135 208.491 421.16ZM197.106 401.25H210.306V396.135H197.106V401.25ZM269.334 426.55C261.964 422.535 257.454 415.495 257.454 405.155V402.075H266.969V396.85H240.899V402.075H250.744V405.21C250.744 415.495 246.509 422.975 238.314 427.485L242.329 432.215C248.049 429.465 252.944 422.865 254.154 417.915C255.584 422.645 261.304 428.97 265.759 431.28L269.334 426.55ZM265.869 409.775H273.514V415.935H265.869V421.05H273.514V441.345H279.949V392.34H273.514V404.66H265.869V409.775ZM327.592 441.345V392.34H321.102V408.895H312.247V414.34H321.102V441.345H327.592ZM316.812 425.615C309.442 420.885 305.042 413.295 305.042 403.615V396.465H298.442V403.945C298.442 413.68 294.152 421.435 286.287 426.55L290.137 431.28C295.252 428.53 300.257 422.315 301.852 416.705C303.502 421.82 309.057 427.98 313.127 430.455L316.812 425.615ZM389.573 441.345V392.34H383.138V441.345H389.573ZM374.503 397.455H351.623V402.79H367.573C366.693 412.525 359.378 422.755 348.653 427.65L352.613 432.49C367.573 424.35 374.118 412.25 374.503 397.455ZM427.866 429.74V415.44H432.431V441.345H438.481V392.34H432.431V410.105H427.866V396.74H422.256V408.565H419.231V396.85H413.621V429.74H427.866ZM411.311 429.74V396.74H405.701V408.565H402.676V396.85H397.121V429.74H411.311ZM422.256 424.625H419.231V413.625H422.256V424.625ZM405.701 424.625H402.676V413.57H405.701V424.625ZM472.428 409.115V404H443.993V409.115H472.428ZM450.868 400.59H465.993V395.53H450.868V400.59ZM482.548 392.34H476.058V441.345H482.548V417.53H489.368V412.195H482.548V392.34ZM446.413 421.38C446.413 427.595 451.198 431.94 458.238 431.94C465.278 431.94 470.063 427.375 470.063 421.38C470.063 415.22 465.278 410.82 458.238 410.82C451.198 410.82 446.413 415.385 446.413 421.38ZM452.683 421.38C452.683 418.135 455.048 415.99 458.238 415.99C461.428 415.99 463.793 418.135 463.793 421.38C463.793 424.57 461.813 426.715 458.238 426.715C454.993 426.715 452.683 424.57 452.683 421.38ZM536.076 434.47V429.355H514.131V412.855H507.696V429.355H491.801V434.47H536.076ZM531.016 396.63H496.531V401.8H524.526C524.691 408.565 524.306 417.97 522.766 423.635L528.926 424.405C530.631 417.915 531.236 408.95 531.016 396.63ZM581.393 406.805C581.393 399.93 575.618 394.98 568.357 394.98C561.098 394.98 555.378 400.04 555.378 406.805C555.378 413.68 561.208 418.245 568.357 418.245C575.673 418.245 581.393 413.68 581.393 406.805ZM594.868 441.455L598.663 436.725C593.658 434.965 589.753 430.07 589.753 424.02V421.875H583.428V424.02C583.428 430.18 580.128 435.295 574.298 437.99C575.728 439.42 577.048 440.905 578.478 442.39C582.548 440.465 585.793 436.12 586.673 432.93C587.773 436.065 591.788 440.135 594.868 441.455ZM587.883 392.34V419.62H594.318V392.34H587.883ZM573.803 436.505L577.763 432.16C574.573 430.95 571.933 427.815 571.933 423.415V422.04H565.663V423.58C565.663 429.85 561.868 434.525 556.203 437L559.998 441.675C563.903 440.135 568.028 435.625 569.238 431.94C570.008 433.7 572.208 435.735 573.803 436.505ZM575.178 406.75C575.178 410.38 572.318 413.295 568.357 413.295C564.398 413.295 561.593 410.49 561.593 406.75C561.593 403.285 564.288 400.315 568.357 400.315C572.648 400.315 575.178 403.175 575.178 406.75ZM601.755 413.24C601.755 423.525 606.43 430.675 614.405 430.675C621.72 430.675 626.23 424.625 626.945 415.77H635.525V441.345H641.96V392.34H635.525V410.325H626.89C626.12 401.58 621.665 395.695 614.405 395.695C606.43 395.695 601.755 402.9 601.755 413.24ZM620.895 413.24C620.895 420.94 618.2 425.505 614.405 425.505C610.72 425.505 608.025 420.94 608.025 413.24C608.025 405.485 610.72 400.865 614.405 400.865C618.2 400.865 620.895 405.485 620.895 413.24ZM652.313 423.8H657.813L658.583 395.585H651.433L652.313 423.8ZM651.763 435.515H658.363V429.08H651.763V435.515Z" fill="#1E1A56"/>
    <defs>
    <linearGradient id="paint0_linear" x1="218.392" y1="119" x2="218.392" y2="222.284" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="#BCFFD5"/>
    </linearGradient>
    <clipPath id="clip0">
    <rect width="282.75" height="103.282" fill="white" transform="translate(77 119)"/>
    </clipPath>
    </defs>
    </svg>
    `;

    const WaterResult2Svg = () => <SvgXml xml={background_forest} style={styles.container} width={wp('100%')} height={hp('100%')} />;
    return <WaterResult2Svg />;
}

const styles = StyleSheet.create({
    container: {
    }
})