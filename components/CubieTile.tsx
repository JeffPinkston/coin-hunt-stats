"use client"
import { useCubiesContext } from '@/contexts/CubiesContext'
import { cubieLoader } from '@/utils/utils'
import { Box, Chip, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

type Props = {
    cubie: Cubie
}

export default function CubieTile({ cubie }: Props) {
    const { handleCubieSelection } = useCubiesContext()
    const selectCubie = () => {
        handleCubieSelection(cubie)
        console.log(cubie)
    }

    const displayChipColor = () => {
        switch (cubie.Tier) {
            case 'Common':
                return 'primary'
            case 'Uncommon':
                return 'success'
            case 'Rare':
                return 'warning'
            case 'Epic':
                return 'error'
            case 'Legendary':
                return 'info'
            default:
                return 'primary'
        }
    }

    return (
        <Card sx={{ height: 160}} onClick={selectCubie}>
            <CardActionArea sx={{ height: 160}}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}>
                    <CardMedia
                        sx={{ height: 60, width: 60}}
                        image={cubieLoader({src: cubie.CubieName})}
                    />
                </Box>
                <CardContent>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Typography sx={{ typography: { xs: 'body1', sm: 'h5'}, fontWeight: {xs: 'bold'}}} component="div">
                            {cubie.CubieName}
                        </Typography>
                        <Chip label={cubie.Tier} color={displayChipColor()} />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                        {cubie.FlavorText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}