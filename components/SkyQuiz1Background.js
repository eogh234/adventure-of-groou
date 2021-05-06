import React from "react";
import { StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "./Responsive";

export default function SkyQuiz1Background() {
    const background = `<svg width="1080" height="1920" viewBox="0 0 1080 1920" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1080 0H0V1920H1080V0Z" fill="#7543FF"/>
    <g filter="url(#filter0_d)">
    <path d="M124.865 333.115V328H96.43V333.115H124.865ZM103.305 324.59H118.43V319.53H103.305V324.59ZM134.985 316.34H128.495V365.345H134.985V341.53H141.805V336.195H134.985V316.34ZM98.85 345.38C98.85 351.595 103.635 355.94 110.675 355.94C117.715 355.94 122.5 351.375 122.5 345.38C122.5 339.22 117.715 334.82 110.675 334.82C103.635 334.82 98.85 339.385 98.85 345.38ZM105.12 345.38C105.12 342.135 107.485 339.99 110.675 339.99C113.865 339.99 116.23 342.135 116.23 345.38C116.23 348.57 114.25 350.715 110.675 350.715C107.43 350.715 105.12 348.57 105.12 345.38ZM183.068 332.07V327.01H156.668V316.89H150.178V332.07H183.068ZM188.513 340.76V335.59H144.238V340.76H188.513ZM184.443 365.125V359.9H156.283V356.875H182.628V344.17H149.573V349.285H176.248V352.31H149.903V365.125H184.443ZM236.101 342.135V337.02H191.826V342.135H236.101ZM232.031 365.125V359.845H203.541V357.15H230.271V344.83H197.161V349.835H223.891V352.64H197.106V365.125H232.031ZM203.376 325.855C203.376 323.6 207.226 321.95 214.046 321.95C220.866 321.95 224.771 323.6 224.771 325.855C224.771 328.055 220.866 329.815 214.046 329.815C207.226 329.815 203.376 328.055 203.376 325.855ZM196.721 325.855C196.721 331.135 202.936 334.655 214.046 334.655C225.101 334.655 231.371 331.135 231.371 325.855C231.371 320.52 225.101 317.055 214.046 317.055C202.936 317.055 196.721 320.52 196.721 325.855ZM292.142 316.34H285.707V365.345H292.142V340.155H299.182V334.82H292.142V316.34ZM262.112 348.68V326.02H278.117V320.85H255.732V353.96H260.462C270.032 353.96 277.457 353.52 282.187 352.31C281.912 350.66 281.747 348.9 281.472 347.195C275.917 348.46 269.097 348.68 262.112 348.68ZM341.985 365.345V316.34H335.55V365.345H341.985ZM331.865 349.395C324.44 344.61 320.535 337.295 320.535 327.615V320.465H313.88V327.945C313.88 337.68 309.645 345.435 301.725 350.55L305.63 355.28C310.69 352.53 315.75 346.315 317.345 340.705C318.995 345.82 324.11 351.76 328.125 354.235L331.865 349.395ZM408.751 332.455V327.175H401.821V316.34H395.276V342.41H401.821V332.455H408.751ZM386.366 344.995V349.725H395.276V365.565H401.821V344.995H386.366ZM387.576 364.08L386.861 359.46C383.781 360.285 378.446 360.505 374.046 360.505V357.315H384.001V344.995H367.666V349.725H377.731V353.025H367.776V365.235H373.166C378.611 365.235 383.286 364.905 387.576 364.08ZM387.851 339.88V319.31H364.916V339.88H387.851ZM381.471 334.875H371.296V324.315H381.471V334.875ZM455.349 358.47V353.355H433.404V336.855H426.969V353.355H411.074V358.47H455.349ZM450.289 320.63H415.804V325.8H443.799C443.964 332.565 443.579 341.97 442.039 347.635L448.199 348.405C449.904 341.915 450.509 332.95 450.289 320.63ZM138.67 441.345V392.34H132.565V411.755H128.935V393.22H122.94V439.09H128.935V416.87H132.565V441.345H138.67ZM120.19 398.005H110.62V403.34H114.305C114.36 414.01 111.72 422.48 105.945 429.575L111.06 432.765C118.21 422.315 120.245 413.57 120.19 398.005ZM108.805 398.005H97.915V403.34H102.865C102.865 412.36 100.5 419.675 95.11 425.835L100.06 429.08C106 421.435 108.86 413.075 108.805 398.005ZM183.618 394.155H167.778V399.215H177.128C177.128 402.02 176.688 407.63 175.313 412.36H162.168C163.653 407.19 164.423 399.82 164.423 394.155H148.308V399.215H157.933C157.933 403.45 156.888 409.115 155.733 412.36H144.238V417.53H188.513V412.36H181.638C182.958 406.31 183.618 399.875 183.618 394.155ZM185.323 436.56C177.348 435.515 169.593 430.455 169.593 424.075V422.04H162.993V424.075C162.993 430.62 155.843 435.625 147.153 436.45L150.013 441.675C157.273 440.74 164.148 435.845 166.293 431.555C168.713 435.845 175.753 440.63 182.463 441.675L185.323 436.56ZM220.041 409.115V404H191.606V409.115H220.041ZM198.481 400.59H213.606V395.53H198.481V400.59ZM230.161 392.34H223.671V441.345H230.161V417.53H236.981V412.195H230.161V392.34ZM194.026 421.38C194.026 427.595 198.811 431.94 205.851 431.94C212.891 431.94 217.676 427.375 217.676 421.38C217.676 415.22 212.891 410.82 205.851 410.82C198.811 410.82 194.026 415.385 194.026 421.38ZM200.296 421.38C200.296 418.135 202.661 415.99 205.851 415.99C209.041 415.99 211.406 418.135 211.406 421.38C211.406 424.57 209.426 426.715 205.851 426.715C202.606 426.715 200.296 424.57 200.296 421.38ZM281.104 441.345V392.34H274.999V441.345H281.104ZM271.259 439.09V393.275H265.264V411.59H258.884V416.76H265.264V439.09H271.259ZM260.149 398.115H241.284V403.285H253.879C253.164 413.02 247.884 421.6 238.314 427.32L242.494 431.775C254.484 423.91 260.149 412.745 260.149 398.115ZM339.785 392.34H333.24V427.87H339.785V411.645H346.77V406.31H339.785V392.34ZM340.94 439.915V434.8H314.43V424.24H307.995V439.915H340.94ZM325.815 419.18V396.08H302.88V419.18H325.815ZM319.435 414.12H309.26V401.085H319.435V414.12ZM388.143 408.84V403.725H361.358V398.28H387.758V393.165H354.923V408.84H388.143ZM393.313 417.035V411.865H349.038V417.035H393.313ZM389.243 441.125V435.845H361.083V432.985H387.483V420.335H354.373V425.395H381.048V428.365H354.703V441.125H389.243ZM422.916 429.025L422.201 423.855C415.876 425.065 409.441 425.12 404.876 425.12V414.945H419.616V396.52H398.386V401.635H413.181V409.83H398.386V430.345C400.146 430.345 401.851 430.4 403.556 430.4C411.916 430.4 417.801 430.015 422.916 429.025ZM422.806 421.655H430.726V441.345H437.106V392.34H430.726V403.835H422.806V409.06H430.726V416.485H422.806V421.655ZM468.853 419.4V396.465H446.138V419.4H468.853ZM478.313 405.1V410.82H471.493V415.88H478.313V427.87H484.693V392.34H478.313V400.04H471.493V405.1H478.313ZM485.683 440.025V434.91H458.843V424.845H452.463V440.025H485.683ZM462.473 414.395H452.518V401.415H462.473V414.395ZM546.73 441.345V392.34H540.35V441.345H546.73ZM507.625 413.24C507.625 423.525 512.3 430.675 520.275 430.675C528.305 430.675 532.98 423.47 532.98 413.24C532.98 402.9 528.305 395.695 520.275 395.695C512.3 395.695 507.625 402.9 507.625 413.24ZM526.82 413.24C526.82 420.94 524.07 425.505 520.275 425.505C516.59 425.505 513.895 420.94 513.895 413.24C513.895 405.485 516.59 400.865 520.275 400.865C524.07 400.865 526.82 405.485 526.82 413.24ZM612.561 420.115V414.945H568.286V420.115H587.096V423.25C578.131 423.855 572.961 427.155 572.961 432.05C572.961 437.495 579.341 440.85 590.396 440.85C601.506 440.85 607.886 437.495 607.886 432.05C607.886 427.155 602.661 423.855 593.531 423.25V420.115H612.561ZM610.306 408.07C603.761 407.795 596.336 404.715 594.356 399.765H608.161V394.65H572.851V399.765H586.601C584.896 404.715 578.241 407.85 570.596 408.18C571.476 409.83 572.411 411.48 573.291 413.185C581.046 412.525 587.921 408.895 590.396 404.055C593.256 408.785 600.406 412.58 607.556 413.185L610.306 408.07ZM601.341 432.105C601.341 434.47 596.996 435.845 590.341 435.845C583.741 435.845 579.506 434.47 579.506 432.105C579.506 429.63 583.741 428.255 590.341 428.255C596.996 428.255 601.341 429.63 601.341 432.105ZM647.774 439.09V393.275H641.724V410.985H637.544C636.994 403.01 633.859 396.025 626.929 396.025C619.394 396.025 616.369 404.605 616.369 413.515C616.369 422.535 619.394 431.17 626.929 431.17C633.804 431.17 636.994 424.185 637.544 416.265H641.724V439.09H647.774ZM657.564 441.345V392.34H651.514V441.345H657.564ZM631.659 413.57C631.659 420.115 630.284 425.45 626.984 425.45C623.794 425.45 622.419 420.115 622.419 413.57C622.419 407.025 623.794 401.635 626.984 401.635C630.284 401.635 631.659 407.025 631.659 413.57ZM135.315 470.265H102.315V490.065H135.315V470.265ZM121.895 517.4V501.12H140.925V496.005H96.65V501.12H115.46V517.4H121.895ZM128.935 484.95H108.75V475.38H128.935V484.95ZM184.718 500.625V468.34H178.338V480.99H171.738V486.16H178.338V500.625H184.718ZM186.753 512.725C178.448 511.405 171.408 506.4 171.408 499.635V497.93H164.753V499.635C164.753 506.4 157.493 511.625 149.023 512.615L151.993 517.785C158.868 516.63 165.853 512.01 167.998 507.39C170.363 511.955 177.458 516.685 183.838 517.785L186.753 512.725ZM144.568 483.63C144.568 490.615 149.573 495.62 157.218 495.62C164.973 495.62 169.868 490.615 169.868 483.63C169.868 476.7 164.973 471.2 157.218 471.2C149.573 471.2 144.568 476.7 144.568 483.63ZM150.893 483.575C150.893 479.67 153.368 476.535 157.218 476.535C161.123 476.535 163.543 479.505 163.543 483.575C163.543 487.48 161.123 490.285 157.218 490.285C153.368 490.285 150.893 487.48 150.893 483.575ZM232.306 517.345V468.34H225.926V517.345H232.306ZM193.201 489.24C193.201 499.525 197.876 506.675 205.851 506.675C213.881 506.675 218.556 499.47 218.556 489.24C218.556 478.9 213.881 471.695 205.851 471.695C197.876 471.695 193.201 478.9 193.201 489.24ZM212.396 489.24C212.396 496.94 209.646 501.505 205.851 501.505C202.166 501.505 199.471 496.94 199.471 489.24C199.471 481.485 202.166 476.865 205.851 476.865C209.646 476.865 212.396 481.485 212.396 489.24ZM295.717 516.96V511.79H268.382V508.82H294.342V496.06H261.892V501.175H287.962V504.145H261.947V516.96H295.717ZM284.662 491.825L284.167 486.985C282.352 487.315 279.987 487.535 277.182 487.755L278.282 478.955C276.192 478.845 274.157 478.57 272.122 478.35L271.572 488.03C269.867 488.14 267.942 488.195 266.017 488.25C265.797 484.895 265.577 481.65 265.467 478.35C263.322 478.57 261.232 478.845 259.142 479.01C259.527 482.09 259.857 485.225 260.297 488.36H253.917L254.742 493.585C264.972 493.585 277.952 493.145 284.662 491.825ZM294.342 493.53V468.34H287.962V493.53H294.342ZM282.792 476.205V471.145H255.567V476.205H282.792ZM341.49 484.235C341.49 476.7 334.395 471.2 323.615 471.2C312.89 471.2 305.795 476.7 305.795 484.235C305.795 491.715 312.89 497.105 323.615 497.105C334.395 497.105 341.49 491.715 341.49 484.235ZM345.725 511.24V506.07H335.715V497.93L329.28 498.205V506.07H317.785V498.205L311.35 497.93V506.07H301.45V511.24H345.725ZM334.89 484.235C334.89 488.635 330.38 491.825 323.615 491.825C316.795 491.825 312.395 488.635 312.395 484.235C312.395 479.78 316.795 476.59 323.615 476.59C330.435 476.59 334.89 479.78 334.89 484.235ZM377.088 480.385V475.435H348.653V480.385H377.088ZM356.078 473.4H370.598V468.56H356.078V473.4ZM394.248 486.435V481.155H387.373V468.34H380.938V496.17H387.373V486.435H394.248ZM388.583 517.235V512.395H361.523V509.975H387.373V498.535H355.033V503.32H380.883V505.63H355.088V517.235H388.583ZM374.943 489.24C374.943 484.73 369.993 481.595 363.338 481.595C356.518 481.595 351.568 484.73 351.568 489.24C351.568 493.805 356.573 496.885 363.338 496.885C369.993 496.885 374.943 493.805 374.943 489.24ZM357.948 489.24C357.948 487.48 360.368 486.27 363.338 486.27C366.143 486.27 368.618 487.48 368.618 489.24C368.618 491.11 366.143 492.265 363.338 492.265C360.423 492.265 357.948 491.11 357.948 489.24ZM435.181 468.34H428.966V517.345H435.181V493.145H442.166V487.81H435.181V468.34ZM411.421 473.455H398.276V478.79H405.371C405.426 487.535 402.071 496.61 395.251 502.99L399.981 506.62C407.736 498.37 411.476 489.075 411.421 473.455ZM425.006 473.455H413.621V478.79H418.956C418.956 489.68 415.931 498.7 408.946 506.015L413.951 509.59C422.531 499.36 425.061 490.34 425.006 473.455ZM449.163 499.855H454.883V496.225C454.883 493.695 456.313 492.76 459.118 490.56C463.078 487.48 464.673 485.775 464.673 481.045C464.673 474.28 459.668 471.64 453.398 471.64C449.713 471.64 446.908 472.19 444.378 473.29V478.02C446.633 477.36 448.393 476.865 451.583 476.865C455.708 476.865 457.908 478.02 457.908 481.54C457.908 484.4 456.973 485.72 454.608 487.535C451.033 490.395 449.163 491.935 449.163 495.73V499.855ZM448.833 511.57H455.543V505.135H448.833V511.57Z" fill="white"/>
    </g>
    <g clip-path="url(#clip0)">
    <path d="M359.75 170.294C359.751 179.972 357.015 189.453 351.856 197.641C346.697 205.829 339.326 212.39 330.596 216.566C321.866 220.743 312.132 222.364 302.52 221.242C292.907 220.12 283.808 216.302 276.274 210.227C267.745 217.454 257.073 221.669 245.908 222.221C234.743 222.774 223.706 219.632 214.506 213.282C206.012 219.144 195.936 222.284 185.616 222.284C175.295 222.284 165.219 219.144 156.725 213.282C149.099 218.549 140.177 221.629 130.926 222.191C121.674 222.752 112.446 220.772 104.239 216.466C96.0316 212.159 89.1585 205.69 84.3632 197.759C79.568 189.828 77.0332 180.736 77.0332 171.468C77.0332 162.199 79.568 153.108 84.3632 145.176C89.1585 137.245 96.0316 130.776 104.239 126.47C112.446 122.164 121.674 120.184 130.926 120.745C140.177 121.306 149.099 124.387 156.725 129.653C165.219 123.791 175.295 120.652 185.616 120.652C195.936 120.652 206.012 123.791 214.506 129.653C223.449 123.482 234.133 120.337 244.993 120.676C255.853 121.016 266.32 124.823 274.86 131.54C282.29 125.097 291.415 120.926 301.149 119.524C310.883 118.122 320.815 119.548 329.761 123.632C338.707 127.716 346.291 134.286 351.608 142.559C356.925 150.832 359.752 160.459 359.751 170.293L359.75 170.294Z" fill="url(#paint0_linear)"/>
    <path d="M198.63 189.225V152.379H189.529V171.465L187.365 171.686V152.6H162.58V160.066H178.44V162.54L162.58 163.689V170.89L178.44 169.742V172.613L160.547 174.381V182.642L169.913 181.715V191.655L178.838 190.33V180.831L189.529 179.726V190.992L198.63 189.225ZM239.253 177.385L243.891 170.493L228.075 163.336V160.508H240.843V152.6H206.029V160.508H218.797V163.777L202.981 171.818L207.62 178.268L223.436 171.023L239.253 177.385ZM243.936 189.093V179.196L202.937 181.626V189.093H243.936ZM271.937 188.651V152.6H262.306L256.209 153.484V161.745L262.306 160.862V190.595L271.937 188.651Z" fill="#1F1A57"/>
    </g>
    <defs>
    <filter id="filter0_d" x="91.1104" y="316.34" width="570.454" height="209.445" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
    <feOffset dy="4"/>
    <feGaussianBlur stdDeviation="2"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
    </filter>
    <linearGradient id="paint0_linear" x1="218.392" y1="119" x2="218.392" y2="222.284" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="#BCFFD5"/>
    </linearGradient>
    <clipPath id="clip0">
    <rect width="282.75" height="103.282" fill="white" transform="translate(77 119)"/>
    </clipPath>
    </defs>
    </svg>              
    `

    const SkyQuiz1BackgroundSvg = () => <SvgXml xml={background} style={styles.container} width={wp('100%')} height={hp('100%')} />;

    return <SkyQuiz1BackgroundSvg />;
}

const styles = StyleSheet.create({
    container: {
    }
})