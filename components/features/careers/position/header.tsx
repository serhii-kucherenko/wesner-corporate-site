import { BriefIcon, ClockIcon, LocationIcon } from 'components/shared/icons';
import { Box, Button, Stack, Typography } from '@mui/material';
import { IPositionFull } from 'models/interfaces/careers/position.interface';
import PositionItem from './position-item';
import NextLink from 'next/link';
import { ERoutes } from 'models/enums/routes.enum';
import { useTranslations } from 'next-intl';
import { useGetResponsiveFontVariants } from 'utils/hooks/responsiveFontVariant.util';
import BackBtn from '@components/shared/back-btn';

interface IProps {
  position: IPositionFull;
}

export default function Header({ position }: IProps): JSX.Element {
  const { title, role, alocation, location } = position;
  const t = useTranslations();
  const getResponsiveFonts = useGetResponsiveFontVariants();

  return (
    <Box component="section" pb={{ xs: 2, md: 0 }}>
      <Stack alignItems="flex-start" gap={{ xs: 2, lg: 3 }}>
        <BackBtn path={ERoutes.Careers} text={t('careers.backBtnText')} />
        <Typography
          component="h1"
          mt={{ xs: 1, lg: 3 }}
          variant={getResponsiveFonts({ medium: 'h4', large: 'h2' })}
        >
          {title}
        </Typography>
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          flexWrap="wrap"
          rowGap={2}
          columnGap={5}
        >
          {location && (
            <PositionItem
              icon={<LocationIcon fontSize="small" />}
              name={location}
            />
          )}
          {alocation && (
            <PositionItem
              icon={<ClockIcon fontSize="small" />}
              name={alocation}
            />
          )}
          {role && (
            <PositionItem icon={<BriefIcon fontSize="small" />} name={role} />
          )}
        </Stack>
        <NextLink href={ERoutes.ContactUs}>
          <Button>{t('contactUs.applyNow')}</Button>
        </NextLink>
      </Stack>
    </Box>
  );
}
