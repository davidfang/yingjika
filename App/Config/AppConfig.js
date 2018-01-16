// Simple React Native specific changes
import Secrets from 'react-native-config'

export default {
  // font scaling override - RN default is on
  allowTextFontScaling: true,
  apiUrl: Secrets.API_URL,
  mjsApiUrl: Secrets.MJS_API_URL
}
