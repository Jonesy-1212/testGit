;`import { routerInit } from '@mci-app-business/router1232';
import { PLUGIN_NAME } from './pluginConfig1232';
import SignIn from './views/sign-in1232';
import Captcha from './views/captcha1232';
import VerifyWebview from './views/verifyWebview';

export const RouterConfig = {
  'sign-in': SignIn,
  captcha: Captcha,
  'verify-webview': VerifyWebview,
};

const { createRouters } = routerInit(PLUGIN_NAME, RouterConfig);

export { createRouters };
`
