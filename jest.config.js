module.exports = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/jest.setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)' +
      '?react-native|react-native|@react-native|' +
      'react-clone-referenced-element|' +
      '@react-native-community|expo(nent)?' +
      '|@expo(nent)?/.*|react-navigation|' +
      '@react-navigation/.*|@unimodules/.*|' +
      'unimodules|sentry-expo|native-base|' +
      'react-native-picker-select|' +
      '@react-native-picker|@expo/vector-icons/.*)',
  ],
};
