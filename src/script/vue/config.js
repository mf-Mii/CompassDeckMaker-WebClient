const config = {
    mode: 'dev',
    url: {
        mainApi: 'https://cpsdm-api.local.mfmii.work/v1',
        page: 'http://cpsdm-dev.local.mfmii.work:5173',
        cdn: 'http://cpsdm-assets.local.mfmii.work',
    },
    api: {
        env: 'mock',
    },
    app: {
        title: '#コンパス DeckMaker',
        logo: 'http://cpsdm-assets.local.mfmii.work/img/logo.svg',
        favicon: 'http://cpsdm-assets.local.mfmii.work/img/favicon.ico',
    },
    page: {
        title_suffix: ' | #コンパス DeckMaker',
    },
}

export default config
