import axios from "axios"

export const getData = async () => {
    const gistDataUrl = `https://api.github.com/gists/${import.meta.env.VITE_GIST_ID}`

    const response = await axios.get(gistDataUrl)
    const dataUrl = response.data.files["portfolio_data.json"].raw_url
    const data = await axios.get(dataUrl)

    return data.data
}
