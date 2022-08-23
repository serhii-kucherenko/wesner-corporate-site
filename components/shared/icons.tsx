import { SvgIcon, SvgIconProps } from '@mui/material';
import Map from '/public/icons/map-pin.svg';
import Mail from '/public/icons/mail.svg';
import Phone from '/public/icons/phone.svg';
import Facebook from '/public/icons/facebook.svg';
import Twitter from '/public/icons/twitter.svg';
import LinkedIn from '/public/icons/linkedin.svg';
import Check from '/public/icons/check.svg';
import Close from '/public/icons/close.svg';

export const MapIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Map}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};

export const MailIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Mail}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};

export const PhoneIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Phone}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};

export const CheckIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Check}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};

export const CloseIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} viewBox="0 0 22 22">
      <path
        d="M15.0637 7.29358C15.0637 7.19045 14.9794 7.10608 14.8762 7.10608L13.3294 7.11311L10.9997 9.89046L8.67233 7.11545L7.12311 7.10842C7.01998 7.10842 6.93561 7.19045 6.93561 7.29592C6.93561 7.34045 6.95201 7.38264 6.98014 7.4178L10.0294 11.0506L6.98014 14.6811C6.95182 14.7154 6.9361 14.7584 6.93561 14.803C6.93561 14.9061 7.01998 14.9905 7.12311 14.9905L8.67233 14.9834L10.9997 12.2061L13.327 14.9811L14.8739 14.9881C14.977 14.9881 15.0614 14.9061 15.0614 14.8006C15.0614 14.7561 15.045 14.7139 15.0169 14.6787L11.9723 11.0483L15.0215 7.41545C15.0497 7.38264 15.0637 7.33811 15.0637 7.29358Z"
        fill="currentColor"
      />
      <path
        d="M11 0.5C5.20156 0.5 0.5 5.20156 0.5 11C0.5 16.7984 5.20156 21.5 11 21.5C16.7984 21.5 21.5 16.7984 21.5 11C21.5 5.20156 16.7984 0.5 11 0.5ZM11 19.7188C6.18594 19.7188 2.28125 15.8141 2.28125 11C2.28125 6.18594 6.18594 2.28125 11 2.28125C15.8141 2.28125 19.7188 6.18594 19.7188 11C19.7188 15.8141 15.8141 19.7188 11 19.7188Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export const MenuIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path
        d="M3 12H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 6H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 18H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  );
};

// SOCIAL

export const FacebookIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Facebook}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};
export const TwitterIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={Twitter}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};
export const LinkedInIcon = (props: SvgIconProps): JSX.Element => {
  return (
    <SvgIcon
      component={LinkedIn}
      inheritViewBox
      {...props}
      sx={{ color: 'rgba(0,0,0,0)', ...props.sx }}
    />
  );
};
