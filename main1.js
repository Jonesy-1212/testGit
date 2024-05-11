;`import { routerInit } from '@mci-app-business/router123';
import { PLUGIN_NAME } from './pluginConfig123';
import SignIn from './views/sign-in123';
import Captcha from './views/captcha123';
import VerifyWebview from './views/verifyWebview';

export const RouterConfig = {
  'sign-in': SignIn,
  captcha: Captcha,
  'verify-webview': VerifyWebview,
};

const { createRouters } = routerInit(PLUGIN_NAME, RouterConfig);

export { createRouters };
`
