/**
 * @format
 */

import 'react-native';
import React from 'react';
import {
  SignUpTab, StoreInfo, BusinessAddress,
  StoreHours, ContactInformation, SignUpProgress,
  ProgressBar, ProgressBox, OAuth, OAuthButton
  }  from '../../../../src/tab-navigator/SignUpTab';

// Note: import explicitly to use the types shipped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("SignUpTab Tests", () => {
  it("renders correctly", () => {
    <SignUpTab />
  });
});

describe("StoreInfo Tests", () => {
  it("renders correctly", () => {
    <StoreInfo />
  });
});

describe("BusinessAddress Tests", () => {
  it("renders correctly", () => {
    <BusinessAddress />
  });
});

describe("StoreHours Tests", () => {
  it("renders correctly", () => {
    <StoreHours />
  });
});

describe("ContactInformation Tests", () => {
  it("renders correctly", () => {
    <ContactInformation />
  });
});

describe("SignUpProgress Tests", () => {
  it("renders correctly", () => {
    <SignUpProgress />
  });
});

describe("OAuthButton Tests", () => {
  it("renders correctly", () => {
    <OAuthButton />
  });
});

describe("OAuth Tests", () => {
  it("renders correctly", () => {
    <OAuth />
  });
});

describe("ProgressBar Tests", () => {
  it("renders correctly", () => {
    <ProgressBar />
  });
});

describe("ProgressBox Tests", () => {
  it("renders correctly", () => {
    <ProgressBox />
  });
});
