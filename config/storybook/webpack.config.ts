import webpack, { DefinePlugin, RuleSetRule } from 'webpack'
// @ts-ignore
import path from 'path'
import { buildCssLoader } from '../build/loaders/buildCssLoaders';
import { BuildPaths } from '../build/types/config';

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    // @ts-ignore
    src: path.resolve(__dirname, '..', '..', 'src')
  }

  config!.resolve!.modules!.push(paths.src)
  config!.resolve!.extensions!.push('.ts', '.tsx')

  // for svg
  // eslint-disable-next-line no-param-reassign
  // @ts-ignore
  config!.module!.rules = config.module!.rules!.map((rule: RuleSetRule) => {
    if (/svg/.test(rule.test as string)) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })

  config!.module!.rules!.push({
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })

  config!.module!.rules!.push(buildCssLoader(true)) // for storybook (only dev)

  config!.plugins!.push(new DefinePlugin({
    __IS_DEV__: JSON.stringify(true),
    __API__: JSON.stringify(''),
  }))

  return config
}