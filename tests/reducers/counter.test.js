import React from 'react';
import chai from 'chai'; // eslint-disable-line import/no-extraneous-dependencies
import { shallow } from 'enzyme'; // eslint-disable-line import/no-extraneous-dependencies
import sinon from 'sinon'; // eslint-disable-line import/no-extraneous-dependencies
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import fetchMock from 'fetch-mock'; // eslint-disable-line import/no-extraneous-dependencies
import { App } from '../../containers/app';

chai.should();
const dispatchSpy = sinon.spy();

function setup() {
  const muiTheme = getMuiTheme();
  const config = { imageApiHostname: 'test.com' };

  fetchMock.get('*', {});

  return shallow(
    <App dispatch={dispatchSpy} config={config} />, { childContextTypes: { muiTheme: React.PropTypes.object }, context: { muiTheme } });
}

describe('An App Component', () => {
  const wrapper = setup();

  it('does stuff', () => {
    wrapper.should.be.an.object;
  });
});
