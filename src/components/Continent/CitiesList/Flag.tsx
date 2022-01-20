interface FlagProps {
  abbreviation: string;
}

export function Flag({ abbreviation }: FlagProps) {
  switch (abbreviation) {
    case 'it':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
            fill="#F0F0F0"
          />
          <path
            d="M512 256C512 145.929 442.528 52.0941 345.043 15.9231V496.078C442.528 459.906 512 366.071 512 256Z"
            fill="#D80027"
          />
          <path
            d="M0 256C0 366.071 69.472 459.906 166.957 496.077V15.9231C69.472 52.0941 0 145.929 0 256Z"
            fill="#6DA544"
          />
        </svg>
      );

    case 'uk':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
            fill="#F0F0F0"
          />
          <path
            d="M52.92 100.142C32.811 126.305 17.648 156.46 8.81897 189.219H141.997L52.92 100.142Z"
            fill="#0052B4"
          />
          <path
            d="M503.181 189.219C494.352 156.461 479.188 126.306 459.08 100.143L370.005 189.219H503.181Z"
            fill="#0052B4"
          />
          <path
            d="M8.81897 322.784C17.649 355.542 32.812 385.697 52.92 411.859L141.994 322.784H8.81897Z"
            fill="#0052B4"
          />
          <path
            d="M411.858 52.9211C385.695 32.8121 355.541 17.6491 322.782 8.81909V141.996L411.858 52.9211Z"
            fill="#0052B4"
          />
          <path
            d="M100.142 459.079C126.305 479.188 156.46 494.351 189.218 503.181V370.005L100.142 459.079Z"
            fill="#0052B4"
          />
          <path
            d="M189.217 8.81909C156.459 17.6491 126.304 32.8121 100.142 52.9201L189.217 141.995V8.81909Z"
            fill="#0052B4"
          />
          <path
            d="M322.783 503.181C355.541 494.351 385.696 479.188 411.858 459.08L322.783 370.005V503.181Z"
            fill="#0052B4"
          />
          <path
            d="M370.005 322.784L459.08 411.86C479.188 385.698 494.352 355.542 503.181 322.784H370.005Z"
            fill="#0052B4"
          />
          <path
            d="M509.833 222.609H289.393H289.392V2.167C278.461 0.744 267.317 0 256 0C244.681 0 233.539 0.744 222.609 2.167V222.607V222.608H2.167C0.744 233.539 0 244.683 0 256C0 267.319 0.744 278.461 2.167 289.391H222.607H222.608V509.833C233.539 511.256 244.681 512 256 512C267.317 512 278.461 511.257 289.391 509.833V289.393V289.392H509.833C511.256 278.461 512 267.319 512 256C512 244.683 511.256 233.539 509.833 222.609Z"
            fill="#D80027"
          />
          <path
            d="M322.783 322.784L437.019 437.02C442.273 431.768 447.285 426.277 452.067 420.585L354.265 322.783H322.783V322.784Z"
            fill="#D80027"
          />
          <path
            d="M189.217 322.784H189.215L74.98 437.019C80.232 442.273 85.723 447.285 91.415 452.067L189.217 354.263V322.784Z"
            fill="#D80027"
          />
          <path
            d="M189.217 189.219V189.217L74.981 74.98C69.727 80.232 64.715 85.723 59.933 91.415L157.736 189.218H189.217V189.219Z"
            fill="#D80027"
          />
          <path
            d="M322.783 189.219L437.02 74.9811C431.768 69.7271 426.277 64.7151 420.585 59.9341L322.783 157.737V189.219Z"
            fill="#D80027"
          />
        </svg>
      );

    case 'fr':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
            fill="#F0F0F0"
          />
          <path
            d="M512 256C512 145.929 442.528 52.094 345.043 15.923V496.078C442.528 459.906 512 366.071 512 256Z"
            fill="#D80027"
          />
          <path
            d="M0 256C0 366.071 69.473 459.906 166.957 496.077V15.923C69.473 52.094 0 145.929 0 256Z"
            fill="#0052B4"
          />
        </svg>
      );

    case 'cz':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
              fill="#F0F0F0"
            />
            <path
              d="M233.739 256C233.739 256 75.1305 437.055 74.9805 437.019C121.306 483.346 185.307 512 256 512C397.384 512 512 397.384 512 256H233.739Z"
              fill="#D80027"
            />
            <path
              d="M74.9795 74.98C-24.9945 174.954 -24.9945 337.045 74.9795 437.02C116.293 395.707 156.026 355.974 256 256L74.9795 74.98Z"
              fill="#0052B4"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="512" height="512" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'nl':
      return (
        <svg
          width="513"
          height="512"
          viewBox="0 0 513 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M256.988 512C398.373 512 512.988 397.385 512.988 256C512.988 114.615 398.373 0 256.988 0C115.603 0 0.988281 114.615 0.988281 256C0.988281 397.385 115.603 512 256.988 512Z"
              fill="#F0F0F0"
            />
            <path
              d="M256.988 0C146.917 0 53.0821 69.472 16.9111 166.957H497.066C460.894 69.472 367.059 0 256.988 0Z"
              fill="#A2001D"
            />
            <path
              d="M256.988 512C367.059 512 460.894 442.528 497.065 345.043H16.9111C53.0821 442.528 146.917 512 256.988 512Z"
              fill="#0052B4"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="512"
                height="512"
                fill="white"
                transform="translate(0.988281)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case 'br':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
            fill="#6DA544"
          />
          <path
            d="M256 100.174L467.478 256L256 411.826L44.5225 256L256 100.174Z"
            fill="#FFDA44"
          />
          <path
            d="M256 345.043C305.177 345.043 345.043 305.177 345.043 256C345.043 206.823 305.177 166.957 256 166.957C206.823 166.957 166.957 206.823 166.957 256C166.957 305.177 206.823 345.043 256 345.043Z"
            fill="#F0F0F0"
          />
          <path
            d="M211.478 250.435C195.994 250.435 181.051 252.79 166.985 257.16C167.608 305.8 207.212 345.044 256 345.044C286.168 345.044 312.812 330.027 328.919 307.076C301.362 272.579 258.961 250.435 211.478 250.435Z"
            fill="#0052B4"
          />
          <path
            d="M343.394 273.06C344.466 267.536 345.045 261.837 345.045 256C345.045 206.822 305.179 166.957 256.002 166.957C219.308 166.957 187.808 189.158 174.176 220.856C186.226 218.359 198.702 217.044 211.481 217.044C263.198 217.043 309.984 238.541 343.394 273.06Z"
            fill="#0052B4"
          />
        </svg>
      );

    case 'pe':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
            fill="#F0F0F0"
          />
          <path
            d="M512 256C512 145.93 442.528 52.0939 345.043 15.924V496.079C442.528 459.906 512 366.072 512 256Z"
            fill="#D80027"
          />
          <path
            d="M0 256C0 366.072 69.472 459.906 166.957 496.078V15.924C69.472 52.0939 0 145.93 0 256Z"
            fill="#D80027"
          />
        </svg>
      );

    case 'jm':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
            fill="#FFDA44"
          />
          <path
            d="M411.856 52.92C368.689 19.739 314.654 0 256 0C197.346 0 143.31 19.74 100.143 52.92L256 208.776L411.856 52.92Z"
            fill="#6DA544"
          />
          <path
            d="M52.919 100.144C19.74 143.311 0 197.346 0 256C0 314.654 19.74 368.69 52.92 411.858L208.777 256L52.919 100.144Z"
            fill="black"
          />
          <path
            d="M100.143 459.08C143.311 492.261 197.346 512 256 512C314.654 512 368.689 492.26 411.857 459.08L256 303.224L100.143 459.08Z"
            fill="#6DA544"
          />
          <path
            d="M459.08 411.856C492.261 368.689 512 314.654 512 256C512 197.346 492.261 143.311 459.08 100.144L303.224 256L459.08 411.856Z"
            fill="black"
          />
        </svg>
      );

    case 'kr':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M256 511.999C397.385 511.999 512 397.384 512 255.999C512 114.614 397.385 -0.000976562 256 -0.000976562C114.615 -0.000976562 0 114.614 0 255.999C0 397.384 114.615 511.999 256 511.999Z"
              fill="#F0F0F0"
            />
            <path
              d="M345.043 255.999C345.043 278.26 305.177 333.912 256 333.912C206.823 333.912 166.957 278.26 166.957 255.999C166.957 206.821 206.823 166.956 256 166.956C305.177 166.956 345.043 206.821 345.043 255.999Z"
              fill="#D80027"
            />
            <path
              d="M345.043 255.999C345.043 305.177 305.177 345.042 256 345.042C206.823 345.042 166.957 305.177 166.957 255.999"
              fill="#0052B4"
            />
            <path
              d="M350.375 334.707L373.982 311.099L389.721 326.838L366.113 350.445L350.375 334.707Z"
              fill="black"
            />
            <path
              d="M311.017 374.054L334.625 350.447L350.363 366.185L326.756 389.793L311.017 374.054Z"
              fill="black"
            />
            <path
              d="M397.593 381.92L421.201 358.312L436.939 374.051L413.332 397.658L397.593 381.92Z"
              fill="black"
            />
            <path
              d="M358.237 421.273L381.844 397.666L397.583 413.404L373.976 437.012L358.237 421.273Z"
              fill="black"
            />
            <path
              d="M373.983 358.315L397.59 334.708L413.329 350.447L389.721 374.054L373.983 358.315Z"
              fill="black"
            />
            <path
              d="M334.636 397.662L358.244 374.055L373.982 389.793L350.375 413.401L334.636 397.662Z"
              fill="black"
            />
            <path
              d="M397.698 177.334L334.744 114.381L350.483 98.6423L413.436 161.596L397.698 177.334Z"
              fill="black"
            />
            <path
              d="M334.732 161.602L311.125 137.995L326.863 122.257L350.47 145.864L334.732 161.602Z"
              fill="black"
            />
            <path
              d="M374.078 200.958L350.471 177.35L366.209 161.613L389.816 185.22L374.078 200.958Z"
              fill="black"
            />
            <path
              d="M381.943 114.379L358.335 90.7714L374.074 75.0328L397.681 98.6403L381.943 114.379Z"
              fill="black"
            />
            <path
              d="M421.31 153.739L397.703 130.132L413.441 114.393L437.049 138.001L421.31 153.739Z"
              fill="black"
            />
            <path
              d="M90.7545 358.271L153.708 421.224L137.969 436.963L75.0159 374.009L90.7545 358.271Z"
              fill="black"
            />
            <path
              d="M153.705 373.997L177.312 397.604L161.574 413.342L137.967 389.735L153.705 373.997Z"
              fill="black"
            />
            <path
              d="M114.355 334.658L137.963 358.266L122.224 374.004L98.6166 350.397L114.355 334.658Z"
              fill="black"
            />
            <path
              d="M137.965 311.044L200.919 373.998L185.18 389.736L122.227 326.783L137.965 311.044Z"
              fill="black"
            />
            <path
              d="M153.701 90.7226L90.7478 153.676L75.0093 137.937L137.963 74.9841L153.701 90.7226Z"
              fill="black"
            />
            <path
              d="M177.309 114.328L114.355 177.281L98.6169 161.542L161.57 98.589L177.309 114.328Z"
              fill="black"
            />
            <path
              d="M200.939 137.949L137.985 200.903L122.247 185.165L185.201 122.212L200.939 137.949Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="512"
                height="512"
                fill="white"
                transform="translate(0 -0.000976562)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case 'jp':
      return (
        <svg
          width="512"
          height="513"
          viewBox="0 0 512 513"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M256 512.989C397.385 512.989 512 398.374 512 256.989C512 115.604 397.385 0.989258 256 0.989258C114.615 0.989258 0 115.604 0 256.989C0 398.374 114.615 512.989 256 512.989Z"
              fill="#F0F0F0"
            />
            <path
              d="M256 368.293C317.472 368.293 367.304 318.461 367.304 256.989C367.304 195.518 317.472 145.685 256 145.685C194.529 145.685 144.696 195.518 144.696 256.989C144.696 318.461 194.529 368.293 256 368.293Z"
              fill="#D80027"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="512"
                height="512"
                fill="white"
                transform="translate(0 0.989258)"
              />
            </clipPath>
          </defs>
        </svg>
      );

    case 'ke':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
              fill="#F0F0F0"
            />
            <path
              d="M256 0C154.506 0 66.8103 59.065 25.4023 144.696H486.597C445.19 59.065 357.493 0 256 0Z"
              fill="black"
            />
            <path
              d="M256 512C154.506 512 66.8103 452.935 25.4023 367.304H486.597C445.19 452.935 357.493 512 256 512Z"
              fill="#496E2D"
            />
            <path
              d="M499.911 178.087H12.089C4.247 202.656 0 228.831 0 256C0 283.169 4.247 309.344 12.089 333.913H499.91C507.753 309.344 512 283.169 512 256C512 228.831 507.753 202.656 499.911 178.087Z"
              fill="#A2001D"
            />
            <path
              d="M335.715 118.301L305.398 104.308L256 216.159L206.602 104.308L176.285 118.301L237.613 256L176.285 393.699L206.602 407.692L256 295.841L305.398 407.692L335.715 393.699L274.387 256L335.715 118.301Z"
              fill="#F0F0F0"
            />
            <path
              d="M276.591 131.489C264.855 118.672 256 111.304 256 111.304C256 111.304 247.145 118.671 235.409 131.489V380.509C247.145 393.328 256 400.696 256 400.696C256 400.696 264.855 393.329 276.591 380.51V131.489Z"
              fill="#F0F0F0"
            />
            <path
              d="M200.348 179.243V332.755C212.75 354.73 227.929 372.742 239.305 384.684V127.315C227.929 139.256 212.749 157.269 200.348 179.243Z"
              fill="#A2001D"
            />
            <path
              d="M311.651 179.243C299.248 157.268 284.07 139.256 272.694 127.315V384.684C284.069 372.742 299.248 354.73 311.651 332.755V179.243Z"
              fill="#A2001D"
            />
            <path
              d="M311.652 179.243V332.755C324.207 310.506 333.913 284.197 333.913 256C333.913 227.803 324.207 201.493 311.652 179.243Z"
              fill="black"
            />
            <path
              d="M200.348 179.243V332.755C187.793 310.506 178.087 284.197 178.087 256C178.087 227.803 187.793 201.493 200.348 179.243Z"
              fill="black"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="512" height="512" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'sa':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M256 512C397.385 512 512 397.385 512 256C512 114.615 397.385 0 256 0C114.615 0 0 114.615 0 256C0 397.385 114.615 512 256 512Z"
              fill="#F0F0F0"
            />
            <path
              d="M74.98 437.02C-24.994 337.045 -24.994 174.955 74.98 74.98C74.973 74.991 222.609 256 222.609 256L74.98 437.02Z"
              fill="black"
            />
            <path
              d="M222.609 256L33.953 128.513C28.104 138.68 22.946 149.292 18.514 160.276L114.023 256.001L18.517 351.731C22.945 362.707 28.098 373.312 33.943 383.472L222.609 256Z"
              fill="#FFDA44"
            />
            <path
              d="M509.833 222.609H222.602L74.978 74.984C59.07 90.892 45.249 108.883 33.953 128.514L161.192 256L33.943 383.47C45.239 403.106 59.066 421.103 74.978 437.015L222.602 289.391H509.833C511.256 278.461 512 267.317 512 256C512 244.683 511.256 233.539 509.833 222.609Z"
              fill="#6DA544"
            />
            <path
              d="M100.138 459.077C143.307 492.259 197.344 512 256 512C374.279 512 473.805 431.779 503.181 322.783H236.433L100.138 459.077Z"
              fill="#0052B4"
            />
            <path
              d="M503.181 189.217C473.805 80.221 374.279 0 256 0C197.344 0 143.307 19.741 100.138 52.923L236.432 189.217H503.181Z"
              fill="#D80027"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="512" height="512" fill="white" />
            </clipPath>
          </defs>
        </svg>
      );

    case 'au':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512 256C512 397.384 397.384 512 256 512C114.616 512 0 397.384 0 256C0 256.06 256 0.029 256 0C397.384 0 512 114.616 512 256Z"
            fill="#0052B4"
          />
          <path
            d="M256 0C255.986 0 255.971 0.001 255.957 0.001L256 0Z"
            fill="#F0F0F0"
          />
          <path
            d="M255.315 256H256C256 255.768 256 255.546 256 255.315C255.772 255.544 255.544 255.772 255.315 256Z"
            fill="#F0F0F0"
          />
          <path
            d="M256 133.566C256 88.521 256 59.004 256 0.000976562H255.957C114.592 0.0239766 0 114.629 0 256H133.565V180.788L208.777 256H255.316C255.545 255.772 255.773 255.544 256.001 255.315C256.001 238.068 256.001 222.679 256.001 208.779L180.788 133.566H256Z"
            fill="#F0F0F0"
          />
          <path
            d="M129.515 33.3911C89.4756 56.1901 56.1896 89.4761 33.3906 129.515V256H100.174V100.175V100.174H256C256 79.1111 256 59.0451 256 33.3911H129.515Z"
            fill="#D80027"
          />
          <path
            d="M255.999 224.519L165.046 133.567H133.565C133.565 133.566 133.565 133.567 133.565 133.567L255.998 256H255.999C255.999 256 255.999 234.295 255.999 224.519Z"
            fill="#D80027"
          />
          <path
            d="M154.395 300.522L168.445 329.9L200.172 322.567L185.964 351.869L211.478 372.102L179.711 379.262L179.8 411.826L154.395 391.453L128.991 411.826L129.08 379.262L97.3115 372.102L122.827 351.869L108.617 322.567L140.346 329.9L154.395 300.522Z"
            fill="#F0F0F0"
          />
          <path
            d="M383.283 356.174L390.308 370.863L406.172 367.196L399.067 381.847L411.825 391.964L395.941 395.544L395.985 411.826L383.283 401.639L370.581 411.826L370.625 395.544L354.742 391.964L367.499 381.847L360.395 367.196L376.258 370.863L383.283 356.174Z"
            fill="#F0F0F0"
          />
          <path
            d="M317.933 200.348L324.957 215.038L340.821 211.37L333.717 226.021L346.474 236.138L330.591 239.718L330.634 256L317.933 245.813L305.231 256L305.274 239.718L289.391 236.138L302.148 226.021L295.044 211.37L310.908 215.038L317.933 200.348Z"
            fill="#F0F0F0"
          />
          <path
            d="M383.283 111.304L390.308 125.994L406.172 122.327L399.068 136.978L411.824 147.094L395.941 150.675L395.985 166.957L383.283 156.77L370.581 166.957L370.625 150.675L354.742 147.094L367.498 136.978L360.395 122.327L376.258 125.994L383.283 111.304Z"
            fill="#F0F0F0"
          />
          <path
            d="M440.367 178.087L447.391 192.777L463.255 189.109L456.151 203.76L468.908 213.877L453.024 217.458L453.068 233.739L440.367 223.553L427.665 233.739L427.708 217.458L411.825 213.877L424.582 203.76L417.478 189.109L433.341 192.777L440.367 178.087Z"
            fill="#F0F0F0"
          />
          <path
            d="M399.55 256L405.075 273.006H422.957L408.49 283.517L414.017 300.522L399.55 290.012L385.084 300.522L390.609 283.517L376.143 273.006H394.024L399.55 256Z"
            fill="#F0F0F0"
          />
        </svg>
      );

    case 'fji':
      return (
        <svg
          width="512"
          height="512"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512 256C512 397.384 397.384 512 256 512C114.616 512 0 397.384 0 256C0 256.061 256 0.028 256 0C397.384 0 512 114.616 512 256Z"
            fill="#338AF3"
          />
          <path d="M256 122.435V208.778L166.957 122.435H256Z" fill="#0052B4" />
          <path
            d="M133.565 256H208.777L133.565 155.826L122.435 233.739L133.565 256Z"
            fill="#0052B4"
          />
          <path
            d="M255.315 256H256C256 255.77 256 255.546 256 255.315C255.772 255.544 255.544 255.772 255.315 256Z"
            fill="#F0F0F0"
          />
          <path
            d="M256 133.565C256 88.52 256 59.005 256 0H255.957C114.592 0.024 0 114.629 0 256H133.565V180.789L208.777 256H255.317C255.545 255.772 255.773 255.544 256.002 255.315C256.002 238.068 256.002 222.679 256.002 208.778L180.788 133.565H256Z"
            fill="#F0F0F0"
          />
          <path
            d="M129.515 33.391C89.4756 56.19 56.1896 89.476 33.3906 129.515V256H100.174V100.176V100.174H256C256 79.111 256 59.045 256 33.391H129.515Z"
            fill="#D80027"
          />
          <path
            d="M255.999 224.519L165.046 133.566H133.565V133.568L255.997 256H255.999C255.999 256 255.999 234.293 255.999 224.519Z"
            fill="#D80027"
          />
          <path
            d="M289.391 166.957V255.999C289.391 315.639 367.304 333.913 367.304 333.913C367.304 333.913 445.217 315.639 445.217 255.999V166.957L367.304 144.696L289.391 166.957Z"
            fill="#F3F3F3"
          />
          <path
            d="M445.217 166.957V133.566H289.391V166.957H356.172V233.741H289.391V256V256.002L356.172 256.003V330.5C362.89 332.876 367.304 333.914 367.304 333.914C367.304 333.914 371.716 332.878 378.433 330.5V256.002H445.217V256V233.74H378.433V166.956H445.217V166.957Z"
            fill="#D80027"
          />
        </svg>
      );

    case 'nz':
      return (
        <svg
          width="513"
          height="512"
          viewBox="0 0 513 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0)">
            <path
              d="M512.988 256C512.988 397.384 398.372 512 256.988 512C115.604 512 0.988281 397.384 0.988281 256C0.988281 256.061 256.988 0.028 256.988 0C398.372 0 512.988 114.616 512.988 256Z"
              fill="#0052B4"
            />
            <path
              d="M256.303 256H256.988C256.988 255.77 256.988 255.546 256.988 255.315C256.76 255.544 256.532 255.772 256.303 256Z"
              fill="#F0F0F0"
            />
            <path
              d="M256.988 133.565C256.988 88.52 256.988 59.005 256.988 0H256.945C115.58 0.024 0.988281 114.629 0.988281 256H134.553V180.789L209.765 256H256.304C256.532 255.772 256.761 255.544 256.989 255.315C256.989 238.068 256.989 222.679 256.989 208.778L181.776 133.565H256.988Z"
              fill="#F0F0F0"
            />
            <path
              d="M130.503 33.3911C90.4644 56.1901 57.1784 89.4761 34.3794 129.515V256H101.162V100.176V100.174H256.988C256.988 79.1111 256.988 59.0451 256.988 33.3911H130.503Z"
              fill="#D80027"
            />
            <path
              d="M256.988 224.519L166.035 133.566C166.035 133.566 134.554 133.568 134.554 133.566V133.568L256.987 256H256.988C256.988 256 256.988 234.293 256.988 224.519Z"
              fill="#D80027"
            />
            <path
              d="M444.318 189.959L449.843 206.965H467.724L453.258 217.475L458.784 234.48L444.318 223.971L429.851 234.48L435.377 217.475L420.91 206.965H438.791L444.318 189.959Z"
              fill="#D80027"
            />
            <path
              d="M380.399 312.393L388.688 337.903H415.509L393.809 353.667L402.099 379.176L380.399 363.411L358.699 379.176L366.989 353.667L345.289 337.903H372.11L380.399 312.393Z"
              fill="#D80027"
            />
            <path
              d="M382.813 112.046L389.721 133.305H412.072L393.988 146.44L400.896 167.698L382.813 154.559L364.731 167.698L371.638 146.44L353.556 133.305H375.906L382.813 112.046Z"
              fill="#D80027"
            />
            <path
              d="M321.31 189.217L329.598 214.727H356.42L334.72 230.491L343.01 256L321.31 240.235L299.61 256L307.9 230.491L286.2 214.727H313.021L321.31 189.217Z"
              fill="#D80027"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect
                width="512"
                height="512"
                fill="white"
                transform="translate(0.988281)"
              />
            </clipPath>
          </defs>
        </svg>
      );
  }
}