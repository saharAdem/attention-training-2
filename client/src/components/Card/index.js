import React, { Fragment } from "react"
import { StyledCard as Card, CardWrapper } from "./style"

const DivCard = ({ info }) => {
  return (
    <CardWrapper>
      <Card bg="rgb(245,245,245)" shadow_color="rgb(240,240,240)"></Card>
      <Card position="absolute" margin_top="30px;" scroll="true" width="90%">
        {info || (
          <Fragment>
            <p>
              How often do you feel overly active and compelled to do things,
              like you were driven by a motor?
            </p>
            <svg
              width="221"
              height="207"
              viewBox="0 0 221 207"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0)">
                <path
                  d="M2.43652 15.9082C2.43652 8.45236 8.48068 2.4082 15.9365 2.4082H205.064C212.519 2.4082 218.564 8.45236 218.564 15.9082V22.033C218.564 29.4888 212.519 35.533 205.064 35.533H15.9365C8.48069 35.533 2.43652 29.4888 2.43652 22.033V15.9082Z"
                  stroke="#E8EEF4"
                  strokeWidth="3"
                />
                <path
                  opacity="0.8"
                  d="M25.369 25.9082H26.937L22.665 14.7562H21.545L17.273 25.9082H18.841L19.833 23.1402H24.377L25.369 25.9082ZM20.297 21.8762L22.105 16.8202L23.913 21.8762H20.297ZM18.729 45.9082H20.329V44.0362H18.729V45.9082Z"
                  fill="#344356"
                />
                <path
                  opacity="0.8"
                  d="M47.8 14.848L44.408 23.728L40.984 14.848H39.4L43.832 26H44.952L49.368 14.848H47.8ZM56.6198 21.76C56.6198 19.84 55.5478 17.968 53.1318 17.968C50.7318 17.968 49.5478 19.92 49.5478 22.096C49.5478 24.288 50.7478 26.144 53.2598 26.144C54.5078 26.144 55.4678 25.744 56.3638 24.784L55.4198 23.936C54.7478 24.656 54.0758 24.88 53.2758 24.88C51.8198 24.88 50.9718 23.968 50.9238 22.464H56.5718C56.6038 22.256 56.6198 21.984 56.6198 21.76ZM50.9238 21.36C51.0038 20.176 51.7718 19.12 53.1158 19.12C54.4438 19.12 55.2438 19.984 55.2918 21.2C55.2918 21.28 55.2918 21.328 55.3078 21.36H50.9238ZM62.2889 17.968C61.4569 17.968 60.5129 18.336 60.0169 19.344V18.112H58.6409V26H60.0169V21.744C60.0169 20.112 60.8009 19.264 62.0009 19.264C62.3529 19.264 62.6889 19.344 63.0249 19.504L63.6969 18.352C63.2329 18.08 62.7849 17.968 62.2889 17.968ZM66.1113 29.264H67.5993L71.9673 18.112H70.4473L68.1913 24.272L65.7113 18.112H64.1913L67.4553 25.872L66.1113 29.264ZM82.4554 26.144C85.5434 26.144 87.6394 23.84 87.6394 20.432C87.6394 17.008 85.5594 14.704 82.4554 14.704C79.3674 14.704 77.2714 17.008 77.2714 20.432C77.2714 23.84 79.3674 26.144 82.4554 26.144ZM82.4554 24.784C80.1674 24.784 78.6954 23.072 78.6954 20.432C78.6954 17.776 80.1674 16.064 82.4554 16.064C84.7434 16.064 86.2154 17.776 86.2154 20.432C86.2154 23.072 84.7434 24.784 82.4554 24.784ZM90.4803 26H91.8563V19.232H93.9843V18.112H91.8563V16.944C91.8563 16.352 92.1123 15.856 92.7523 15.856C93.0243 15.856 93.2963 15.952 93.5843 16.096L94.0483 15.024C93.5683 14.816 93.1043 14.704 92.6083 14.704C91.5203 14.704 90.4963 15.216 90.4963 17.008V18.112H88.8643V19.232H90.4803V26ZM99.178 19.232V18.112H97.242V14.992L95.866 16.032V18.112H94.57V19.232H95.866V24.032C95.866 25.52 96.762 26.144 97.898 26.144C98.314 26.144 98.746 26.064 99.178 25.92V24.752C98.826 24.864 98.506 24.928 98.234 24.928C97.61 24.928 97.242 24.608 97.242 23.888V19.232H99.178ZM107.495 21.76C107.495 19.84 106.423 17.968 104.007 17.968C101.607 17.968 100.423 19.92 100.423 22.096C100.423 24.288 101.623 26.144 104.135 26.144C105.383 26.144 106.343 25.744 107.239 24.784L106.295 23.936C105.623 24.656 104.951 24.88 104.151 24.88C102.695 24.88 101.847 23.968 101.799 22.464H107.447C107.479 22.256 107.495 21.984 107.495 21.76ZM101.799 21.36C101.879 20.176 102.647 19.12 103.991 19.12C105.319 19.12 106.119 19.984 106.167 21.2C106.167 21.28 106.167 21.328 106.183 21.36H101.799ZM113.42 17.968C112.348 17.968 111.42 18.416 110.892 19.184V18.112H109.516V26H110.892V22.592C110.892 20.64 111.468 19.184 113.052 19.184C114.332 19.184 114.7 20.112 114.7 21.424V26H116.076V21.088C116.076 19.056 115.148 17.968 113.42 17.968Z"
                  fill="#344356"
                />
              </g>
              <g clipPath="url(#clip1)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.936523 58.2617C0.936523 49.9774 7.65225 43.2617 15.9365 43.2617H205.064C213.348 43.2617 220.064 49.9774 220.064 58.2617V64.3865C220.064 72.6708 213.348 79.3865 205.064 79.3865H15.9365C7.65226 79.3865 0.936523 72.6708 0.936523 64.3865V58.2617Z"
                  fill="#ED6237"
                />
                <path
                  d="M18.281 68.2617H22.665C24.937 68.2617 26.297 67.0457 26.297 64.9977C26.297 63.6057 25.673 62.6777 24.473 62.2457C25.257 61.7977 25.705 60.9657 25.705 59.9257C25.705 58.1657 24.393 57.1097 22.169 57.1097H18.281V68.2617ZM20.281 61.5417V58.9497H22.169C23.145 58.9497 23.705 59.4297 23.705 60.2777C23.705 61.1097 23.177 61.5417 22.169 61.5417H20.281ZM20.281 66.4217V63.3817H22.505C23.673 63.3817 24.297 63.8937 24.297 64.8377C24.297 65.8137 23.625 66.4217 22.505 66.4217H20.281ZM18.425 88.2617H20.361V86.1817H18.425V88.2617Z"
                  fill="white"
                />
                <path
                  d="M44.936 68.16C48.104 68.16 50.264 65.84 50.264 62.432C50.264 59.008 48.12 56.688 44.936 56.688C41.768 56.688 39.608 59.008 39.608 62.432C39.608 65.84 41.768 68.16 44.936 68.16ZM44.936 66.256C42.904 66.256 41.608 64.768 41.608 62.432C41.608 60.08 42.904 58.592 44.936 58.592C46.968 58.592 48.264 60.096 48.264 62.432C48.264 64.752 46.968 66.256 44.936 66.256ZM52.6309 68H54.5509V61.632H56.3909V60.112H54.5509V59.2C54.5509 58.912 54.5509 58.288 55.2389 58.288C55.4949 58.288 55.7189 58.368 55.8949 58.48L56.5189 57.008C56.1029 56.816 55.6389 56.688 55.0309 56.688C53.7829 56.688 52.6469 57.216 52.6469 59.216V60.112H51.1269V61.632H52.6309V68ZM62.0155 61.632V60.112H60.0475V56.848L58.1275 58.272V60.112H56.8475V61.632H58.1275V65.792C58.1275 67.472 59.2475 68.16 60.5755 68.16C61.0555 68.16 61.5355 68.08 62.0155 67.92V66.384C61.6635 66.496 61.3275 66.56 61.0555 66.56C60.4315 66.56 60.0475 66.272 60.0475 65.648V61.632H62.0155ZM70.34 63.952C70.34 61.76 69.156 59.952 66.708 59.952C64.084 59.952 62.964 62.032 62.964 64.096C62.964 66.208 64.116 68.16 66.836 68.16C68.164 68.16 69.204 67.696 70.068 66.736L68.74 65.568C68.196 66.192 67.556 66.416 66.852 66.416C65.604 66.416 64.964 65.728 64.884 64.688H70.292C70.324 64.432 70.34 64.192 70.34 63.952ZM64.868 63.248C64.948 62.432 65.492 61.552 66.692 61.552C67.732 61.552 68.5 62.192 68.5 63.248H64.868ZM76.2209 59.952C75.2609 59.952 74.3969 60.272 73.8369 61.024V60.112H71.9169V68H73.8369V64.848C73.8369 63.44 73.8369 61.632 75.6289 61.632C77.0849 61.632 77.0849 62.848 77.0849 63.392V68H79.0049V62.912C79.0049 61.04 77.9969 59.952 76.2209 59.952Z"
                  fill="white"
                />
              </g>
              <g clipPath="url(#clip2)">
                <path
                  d="M2.43652 100.614C2.43652 93.1584 8.48068 87.1143 15.9365 87.1143H205.064C212.519 87.1143 218.564 93.1584 218.564 100.614V106.739C218.564 114.195 212.519 120.239 205.064 120.239H15.9365C8.48069 120.239 2.43652 114.195 2.43652 106.739V100.614Z"
                  stroke="#E8EEF4"
                  strokeWidth="3"
                />
                <path
                  opacity="0.8"
                  d="M22.985 110.758C25.257 110.758 26.953 109.654 27.785 107.622L26.425 107.126C25.849 108.614 24.665 109.398 22.985 109.398C20.601 109.398 19.225 107.782 19.225 105.014C19.225 102.262 20.617 100.678 23.033 100.678C24.713 100.678 25.865 101.414 26.425 102.902L27.753 102.39C26.953 100.374 25.321 99.3183 23.033 99.3183C19.801 99.3183 17.801 101.494 17.801 105.014C17.801 108.566 19.769 110.758 22.985 110.758ZM18.729 130.614H20.329V128.742H18.729V130.614Z"
                  fill="#344356"
                />
                <path
                  opacity="0.8"
                  d="M43.672 111.112C45.864 111.112 47.368 109.864 47.368 107.864C47.368 106.408 46.632 105.528 44.184 104.6C42.456 103.928 41.752 103.432 41.752 102.584C41.752 101.688 42.52 100.984 43.56 100.984C44.456 100.984 45.208 101.48 45.656 102.296L46.856 101.56C46.168 100.36 45.048 99.704 43.608 99.704C41.656 99.704 40.328 100.872 40.328 102.648C40.328 104.056 41.128 104.872 43.416 105.752C45.272 106.472 45.928 107.048 45.928 107.992C45.928 109.096 45.032 109.848 43.688 109.848C42.264 109.848 41.24 109 41.048 107.624L39.64 107.96C39.944 109.864 41.56 111.112 43.672 111.112ZM52.4488 111.144C54.7688 111.144 56.3048 109.336 56.3048 107.048C56.3048 104.744 54.7528 102.968 52.4488 102.968C50.1288 102.968 48.6248 104.744 48.6248 107.048C48.6248 109.352 50.1288 111.144 52.4488 111.144ZM52.4488 109.928C50.8488 109.928 50.0008 108.664 50.0008 107.048C50.0008 105.432 50.8328 104.184 52.4488 104.184C54.0648 104.184 54.9288 105.416 54.9288 107.048C54.9288 108.648 54.0648 109.928 52.4488 109.928ZM66.6495 102.968C65.5135 102.968 64.6175 103.432 64.0735 104.504C63.6415 103.4 62.7775 102.968 61.7535 102.968C60.9055 102.968 60.1055 103.272 59.6095 104.088V103.112H58.2655L58.2815 111H59.6575V107.464C59.6575 105.752 59.9295 104.184 61.4975 104.184C62.8255 104.184 63.1295 105.4 63.1295 106.472V111H64.5055V107.464C64.5055 105.752 64.7615 104.184 66.3775 104.184C67.9455 104.184 67.9775 105.784 67.9775 106.44V111H69.3535V106.04C69.3535 104.28 68.5375 102.968 66.6495 102.968ZM78.276 106.76C78.276 104.84 77.204 102.968 74.788 102.968C72.388 102.968 71.204 104.92 71.204 107.096C71.204 109.288 72.404 111.144 74.916 111.144C76.164 111.144 77.124 110.744 78.02 109.784L77.076 108.936C76.404 109.656 75.732 109.88 74.932 109.88C73.476 109.88 72.628 108.968 72.58 107.464H78.228C78.26 107.256 78.276 106.984 78.276 106.76ZM72.58 106.36C72.66 105.176 73.428 104.12 74.772 104.12C76.1 104.12 76.9 104.984 76.948 106.2C76.948 106.28 76.948 106.328 76.964 106.36H72.58ZM83.8811 104.232V103.112H81.9451V99.992L80.5691 101.032V103.112H79.2731V104.232H80.5691V109.032C80.5691 110.52 81.4651 111.144 82.6011 111.144C83.0171 111.144 83.4491 111.064 83.8811 110.92V109.752C83.5291 109.864 83.2091 109.928 82.9371 109.928C82.3131 109.928 81.9451 109.608 81.9451 108.888V104.232H83.8811ZM85.764 101.528H87.3V99.848H85.764V101.528ZM85.844 111H87.22V103.112H85.844V111ZM98.2745 102.968C97.1385 102.968 96.2425 103.432 95.6985 104.504C95.2665 103.4 94.4025 102.968 93.3785 102.968C92.5305 102.968 91.7305 103.272 91.2345 104.088V103.112H89.8905L89.9065 111H91.2825V107.464C91.2825 105.752 91.5545 104.184 93.1225 104.184C94.4505 104.184 94.7545 105.4 94.7545 106.472V111H96.1305V107.464C96.1305 105.752 96.3865 104.184 98.0025 104.184C99.5705 104.184 99.6025 105.784 99.6025 106.44V111H100.979V106.04C100.979 104.28 100.163 102.968 98.2745 102.968ZM109.901 106.76C109.901 104.84 108.829 102.968 106.413 102.968C104.013 102.968 102.829 104.92 102.829 107.096C102.829 109.288 104.029 111.144 106.541 111.144C107.789 111.144 108.749 110.744 109.645 109.784L108.701 108.936C108.029 109.656 107.357 109.88 106.557 109.88C105.101 109.88 104.253 108.968 104.205 107.464H109.853C109.885 107.256 109.901 106.984 109.901 106.76ZM104.205 106.36C104.285 105.176 105.053 104.12 106.397 104.12C107.725 104.12 108.525 104.984 108.573 106.2C108.573 106.28 108.573 106.328 108.589 106.36H104.205ZM114.338 111.144C115.842 111.144 117.25 110.344 117.25 108.664C117.25 105.704 112.834 106.728 112.834 105.08C112.834 104.504 113.378 104.136 114.242 104.136C115.17 104.136 115.73 104.6 116.082 105.24L117.17 104.648C116.61 103.544 115.57 102.968 114.274 102.968C112.722 102.968 111.506 103.8 111.506 105.224C111.506 108.072 115.89 106.904 115.89 108.744C115.89 109.432 115.314 109.96 114.29 109.96C113.122 109.96 112.466 109.256 112.21 108.52L111.074 109.032C111.49 110.264 112.754 111.144 114.338 111.144Z"
                  fill="#344356"
                />
              </g>
              <g clipPath="url(#clip3)">
                <path
                  d="M2.43652 142.968C2.43652 135.512 8.48068 129.468 15.9365 129.468H205.064C212.519 129.468 218.564 135.512 218.564 142.968V149.093C218.564 156.548 212.519 162.593 205.064 162.593H15.9365C8.48069 162.593 2.43652 156.548 2.43652 149.093V142.968Z"
                  stroke="#E8EEF4"
                  strokeWidth="3"
                />
                <path
                  opacity="0.8"
                  d="M18.553 152.968H21.641C25.353 152.968 27.385 151.032 27.385 147.48C27.385 143.88 25.305 141.816 21.657 141.816H18.553V152.968ZM19.977 151.656V143.128H21.625C24.521 143.128 25.945 144.552 25.945 147.416C25.945 150.296 24.521 151.656 21.513 151.656H19.977ZM18.729 172.968H20.329V171.096H18.729V172.968Z"
                  fill="#344356"
                />
                <path
                  opacity="0.8"
                  d="M48.552 153L45.528 147.976C46.968 147.576 47.736 146.568 47.736 144.984C47.736 142.968 46.504 141.848 44.024 141.848H40.68V153H42.104V148.168H43.384H44.104L46.904 153H48.552ZM42.104 146.84V143.16H43.88C45.48 143.16 46.312 143.736 46.312 145C46.312 146.264 45.48 146.84 43.88 146.84H42.104ZM53.1608 144.968C51.7848 144.968 50.7128 145.496 49.8328 146.616L50.8248 147.448C51.4488 146.616 52.2008 146.184 53.1288 146.184C54.3288 146.184 55.0008 146.856 55.0008 148.072V148.392H53.2568C51.9288 148.392 51.1448 148.52 50.5688 148.824C49.9128 149.192 49.5608 149.832 49.5608 150.664C49.5608 152.184 50.6328 153.144 52.3288 153.144C53.5128 153.144 54.4568 152.664 55.0168 151.816L55.1128 153H56.3768V148.072C56.3768 146.12 55.1768 144.968 53.1608 144.968ZM52.6488 151.992C51.5928 151.992 50.9368 151.496 50.9368 150.728C50.9368 150.328 51.0807 150.024 51.3368 149.816C51.6728 149.56 52.2168 149.464 53.4168 149.464H55.0008V149.544C55.0008 151 54.0408 151.992 52.6488 151.992ZM62.492 144.968C61.66 144.968 60.716 145.336 60.22 146.344V145.112H58.844V153H60.22V148.744C60.22 147.112 61.004 146.264 62.204 146.264C62.556 146.264 62.892 146.344 63.228 146.504L63.9 145.352C63.436 145.08 62.988 144.968 62.492 144.968ZM71.1354 148.76C71.1354 146.84 70.0634 144.968 67.6474 144.968C65.2474 144.968 64.0634 146.92 64.0634 149.096C64.0634 151.288 65.2634 153.144 67.7754 153.144C69.0234 153.144 69.9834 152.744 70.8794 151.784L69.9354 150.936C69.2634 151.656 68.5914 151.88 67.7914 151.88C66.3354 151.88 65.4874 150.968 65.4394 149.464H71.0874C71.1194 149.256 71.1354 148.984 71.1354 148.76ZM65.4394 148.36C65.5194 147.176 66.2874 146.12 67.6314 146.12C68.9594 146.12 69.7594 146.984 69.8074 148.2C69.8074 148.28 69.8074 148.328 69.8234 148.36H65.4394ZM74.7085 153.144C75.0605 153.144 75.4765 153.048 75.8445 152.92L75.8285 151.784C75.6045 151.848 75.3485 151.912 75.1245 151.912C74.6605 151.912 74.4685 151.624 74.4685 151.144V141.848H73.0925V151.224C73.0925 152.52 73.7485 153.144 74.7085 153.144ZM78.2675 156.264H79.7555L84.1235 145.112H82.6035L80.3475 151.272L77.8675 145.112H76.3475L79.6115 152.872L78.2675 156.264Z"
                  fill="#344356"
                />
              </g>
              <g clipPath="url(#clip4)">
                <path
                  d="M2.43652 185.321C2.43652 177.865 8.48068 171.821 15.9365 171.821H205.064C212.519 171.821 218.564 177.865 218.564 185.321V191.446C218.564 198.902 212.519 204.946 205.064 204.946H15.9365C8.48069 204.946 2.43652 198.902 2.43652 191.446V185.321Z"
                  stroke="#E8EEF4"
                  strokeWidth="3"
                />
                <path
                  opacity="0.8"
                  d="M18.553 195.321H25.913V194.009H19.977V190.281H25.369V188.969H19.977V185.481H25.913V184.169H18.553V195.321ZM18.729 215.321H20.329V213.449H18.729V215.321Z"
                  fill="#344356"
                />
                <path
                  opacity="0.8"
                  d="M47.6161 184.169V192.857L42.3841 184.169H40.8641V195.321H42.2881V186.601L47.5041 195.321H49.0401V184.169H47.6161ZM58.4757 191.081C58.4757 189.161 57.4037 187.289 54.9877 187.289C52.5877 187.289 51.4037 189.241 51.4037 191.417C51.4037 193.609 52.6037 195.465 55.1157 195.465C56.3637 195.465 57.3237 195.065 58.2197 194.105L57.2757 193.257C56.6037 193.977 55.9317 194.201 55.1317 194.201C53.6757 194.201 52.8277 193.289 52.7797 191.785H58.4277C58.4597 191.577 58.4757 191.305 58.4757 191.081ZM52.7797 190.681C52.8597 189.497 53.6277 188.441 54.9717 188.441C56.2997 188.441 57.0997 189.305 57.1477 190.521C57.1477 190.601 57.1477 190.649 57.1637 190.681H52.7797ZM62.5608 195.321H63.7128L66.9448 187.433H65.4408L63.1208 193.545L60.8328 187.433H59.3448L62.5608 195.321ZM46.9601 211.081C46.9601 209.161 45.8881 207.289 43.4721 207.289C41.0721 207.289 39.8881 209.241 39.8881 211.417C39.8881 213.609 41.0881 215.465 43.6001 215.465C44.8481 215.465 45.8081 215.065 46.7041 214.105L45.7601 213.257C45.0881 213.977 44.4161 214.201 43.6161 214.201C42.1601 214.201 41.3121 213.289 41.2641 211.785H46.9121C46.9441 211.577 46.9601 211.305 46.9601 211.081ZM41.2641 210.681C41.3441 209.497 42.1121 208.441 43.4561 208.441C44.7841 208.441 45.5841 209.305 45.6321 210.521C45.6321 210.601 45.6321 210.649 45.6481 210.681H41.2641ZM52.6292 207.289C51.7972 207.289 50.8532 207.657 50.3572 208.665V207.433H48.9812V215.321H50.3572V211.065C50.3572 209.433 51.1412 208.585 52.3412 208.585C52.6932 208.585 53.0292 208.665 53.3652 208.825L54.0372 207.673C53.5732 207.401 53.1252 207.289 52.6292 207.289Z"
                  fill="#344356"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect
                    width="219.127"
                    height="36.1248"
                    fill="white"
                    transform="translate(0.936523 0.908203)"
                  />
                </clipPath>
                <clipPath id="clip1">
                  <rect
                    width="219.127"
                    height="36.1248"
                    fill="white"
                    transform="translate(0.936523 43.2617)"
                  />
                </clipPath>
                <clipPath id="clip2">
                  <rect
                    width="219.127"
                    height="36.1248"
                    fill="white"
                    transform="translate(0.936523 85.6143)"
                  />
                </clipPath>
                <clipPath id="clip3">
                  <rect
                    width="219.127"
                    height="36.1248"
                    fill="white"
                    transform="translate(0.936523 127.968)"
                  />
                </clipPath>
                <clipPath id="clip4">
                  <rect
                    width="219.127"
                    height="36.1248"
                    fill="white"
                    transform="translate(0.936523 170.321)"
                  />
                </clipPath>
              </defs>
            </svg>
          </Fragment>
        )}
      </Card>
    </CardWrapper>
  )
}
export default DivCard
