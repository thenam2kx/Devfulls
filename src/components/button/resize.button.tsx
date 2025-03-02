import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'


interface IProps {
  title: string
  icon: React.ReactNode
  style: React.CSSProperties
  variant: 'text' | 'outlined' | 'contained'
}

const ResizeButton = (props: IProps) => {
  const { icon, style, variant, title } = props
  return (
    <Button
      variant={variant}
      endIcon={icon}
      sx={style}
    >
      <Typography>{title}</Typography>
    </Button>
  )
}

export default ResizeButton