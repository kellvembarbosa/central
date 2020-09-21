import HeadNext from 'next/head'
import { useEffect } from 'react'

export default function Head({ title }) {
    const titleSite = "Central de anúncio"

    useEffect(() => {
        WebFont.load({ google: { 'families': ['Lato:300,400,700,900'] }, custom: { 'families': ['Flaticon', 'Font Awesome 5 Solid', 'Font Awesome 5 Regular', 'Font Awesome 5 Brands', 'simple-line-icons'], urls: ['./assets/css/fonts.min.css'] }, active: function () { sessionStorage.fonts = true; } })
    })

    return (
        <HeadNext>
            <title>{(title) ? title + " - "+ titleSite : titleSite}</title>
            <script src="../assets/js/plugin/webfont/webfont.min.js"></script>

            <link rel="stylesheet" href="./assets/css/bootstrap.min.css" />
            <link rel="stylesheet" href="./assets/css/atlantis2.css" />
        </HeadNext>
    )
}