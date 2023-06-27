import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

interface Props {
    title: string,
    sx: Object
}

export function Copyright(props: Props) {
    const { title } = props;
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          {title}
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }