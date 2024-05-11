;`import { routerInit } from '@mci-app-business/router1232+3';
import { PLUGIN_NAME } from './pluginConfig1232+3';
import SignIn from './views/sign-in+3';
import Captcha from './views/captcha+3';
import VerifyWebview from './views/verifyWebview';

export const RouterConfig = {
  'sign-in': SignIn,
  captcha: Captcha,
  'verify-webview': VerifyWebview,
};

const { createRouters } = routerInit(PLUGIN_NAME, RouterConfig);

export { createRouters };
`
