;`import { routerInit } from '@mci-app-business/router';
import { PLUGIN_NAME } from './pluginConfig';
import SignIn from './views/sign-in';
import Captcha from './views/captcha';
import VerifyWebview from './views/verifyWebview';

export const RouterConfig = {
  'sign-in': SignIn,
  captcha: Captcha,
  'verify-webview': VerifyWebview,
};

const { createRouters } = routerInit(PLUGIN_NAME, RouterConfig);

export { createRouters };
`
