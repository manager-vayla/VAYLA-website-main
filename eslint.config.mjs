import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default [
  ...nextCoreWebVitals,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'output/**',
      'vayla-deliverable/vayla-react/server/**',
      'vayla-deliverable/vayla-react/vite.config.ts',
      'stitch_*.jsx',
    ],
  },
  {
    rules: {
      // These compiler rules reject established visual/demo patterns that are
      // intentionally local and do not affect the static export contract.
      'react-hooks/purity': 'off',
      'react-hooks/immutability': 'off',
      'react-hooks/set-state-in-effect': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
];
