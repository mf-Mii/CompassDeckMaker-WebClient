const config = {
  env: 'dev',
  endpoints: {
    mainApi: 'https://cpsdm-api.local.mfmii.work/v1',
    page: 'http://cpsdm-dev.local.mfmii.work:5173',
    cdn: 'http://127.0.0.1:4174',
  },
  app: {
    title: '#コンパス DeckMaker',
    version: '0.1.0',
  },
  api: {
  },
  resources: {
    logo: '/img/logo.svg',
    favicon: '/img/favicon.ico',
  },
  page: {
    title_suffix: ' | #コンパス DeckMaker',
  },
}
export const initConfig = () => {
  if (config.env === 'dev') {
    config.endpoints.mainApi = 'https://9c228795-82be-4002-899b-f5477ead465a.mock.pstmn.io'
  }
}
export const getConfigValue = (key: string) : string | number | null => {
  let _config: any = config
  for (const k of key.split('.')) {
    _config = _config[k]
  }
  // @ts-ignore
  // return key.split('.').reduce((o, i) => o[i], config)
  return _config
}
