"use client"
import { useCubiesContext } from '@/providers/CubiesProvider'
import { blueprintLoader, cubieLoader } from '@/utils/utils'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActionArea from '@mui/material/CardActionArea'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Image from 'next/image'

type Props = {
    cubie: Cubie
    index: number
}

export default function CubieTile({ cubie, index }: Props) {
    const { handleCubieSelection } = useCubiesContext()
    const selectCubie = () => {
        handleCubieSelection(cubie)
        console.log(cubie)
    }

    return (
        <Card sx={{ height: 160}} onClick={selectCubie}>
            <CardActionArea sx={{ height: 160}}>
                <CardMedia
                    sx={{ height: 60, width: 60}}
                    image={cubieLoader({src: cubie.CubieName})}
                />
                <CardContent>
                    <Typography variant="h5" component="div">
                        {cubie.CubieName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {cubie.FlavorText}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}