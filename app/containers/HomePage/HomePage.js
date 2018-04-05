/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/Layout';
import SearchBox from 'components/SearchBox';
import MarkdownViewer from 'components/MarkdownViewer';

import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.username && this.props.username.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const base64Md = 'IyMjIFdoYXQgZGlkIEkganVzdCBjb21taXQ/DQoNCkxldCdzIHNheSB0aGF0IHlvdSBqdXN0IGJsaW5kbHkgY29tbWl0dGVkIGNoYW5nZXMgd2l0aCBgZ2l0IGNvbW1pdCAtYWAgYW5kIHlvdSdyZSBub3Qgc3VyZSB3aGF0IHRoZSBhY3R1YWwgY29udGVudCBvZiB0aGUgY29tbWl0IHlvdSBqdXN0IG1hZGUgd2FzLiBZb3UgY2FuIHNob3cgdGhlIGxhdGVzdCBjb21taXQgb24geW91ciBjdXJyZW50IEhFQUQgd2l0aDoNCg0KYGBgc2gNCihtYXN0ZXIpJCBnaXQgc2hvdw0KYGBgDQoNCk9yDQoNCmBgYHNoDQokIGdpdCBsb2cgLW4xIC1wDQpgYGANCg0KSWYgeW91IHdhbnQgdG8gc2VlIGEgZmlsZSBhdCBhIHNwZWNpZmljIGNvbW1pdCwgeW91IGNhbiBhbHNvIGRvIHRoaXMgKHdoZXJlIGA8Y29tbWl0aWQ+YCBpcyB0aGUgY29tbWl0IHlvdSdyZSBpbnRlcmVzdGVkIGluKToNCg0KYGBgc2gNCiQgZ2l0IHNob3cgPGNvbW1pdGlkPjpmaWxlbmFtZQ0KYGBg';
    // const base64Md = 'IyMgU3RhZ2luZwoKPGEgaHJlZj0iI2ktbmVlZC10by1hZGQtc3RhZ2VkLWNoYW5nZXMtdG8tdGhlLXByZXZpb3VzLWNvbW1pdCI+PC9hPgojIyMgSSBuZWVkIHRvIGFkZCBzdGFnZWQgY2hhbmdlcyB0byB0aGUgcHJldmlvdXMgY29tbWl0CgpgYGBzaAoobXktYnJhbmNoKikkIGdpdCBjb21taXQgLS1hbWVuZAoKYGBgCgo8YSBuYW1lPSJjb21taXQtcGFydGlhbC1uZXctZmlsZSI+PC9hPgojIyMgSSB3YW50IHRvIHN0YWdlIHBhcnQgb2YgYSBuZXcgZmlsZSwgYnV0IG5vdCB0aGUgd2hvbGUgZmlsZQoKTm9ybWFsbHksIGlmIHlvdSB3YW50IHRvIHN0YWdlIHBhcnQgb2YgYSBmaWxlLCB5b3UgcnVuIHRoaXM6CgpgYGBzaAokIGdpdCBhZGQgLS1wYXRjaCBmaWxlbmFtZS54CmBgYAoKYC1wYCB3aWxsIHdvcmsgZm9yIHNob3J0LiBUaGlzIHdpbGwgb3BlbiBpbnRlcmFjdGl2ZSBtb2RlLiBZb3Ugd291bGQgYmUgYWJsZSB0byB1c2UgdGhlIGBzYCBvcHRpb24gdG8gc3BsaXQgdGhlIGNvbW1pdCAtIGhvd2V2ZXIsIGlmIHRoZSBmaWxlIGlzIG5ldywgeW91IHdpbGwgbm90IGhhdmUgdGhpcyBvcHRpb24uIFRvIGFkZCBhIG5ldyBmaWxlLCBkbyB0aGlzOgoKYGBgc2gKJCBnaXQgYWRkIC1OIGZpbGVuYW1lLngKYGBgCgpUaGVuLCB5b3Ugd2lsbCBuZWVkIHRvIHVzZSB0aGUgYGVgIG9wdGlvbiB0byBtYW51YWxseSBjaG9vc2Ugd2hpY2ggbGluZXMgdG8gYWRkLiBSdW5uaW5nIGBnaXQgZGlmZiAtLWNhY2hlZGAgb3IKYGdpdCBkaWZmIC0tc3RhZ2VkYCB3aWxsIHNob3cgeW91IHdoaWNoIGxpbmVzIHlvdSBoYXZlIHN0YWdlZCBjb21wYXJlZCB0byB3aGljaCBhcmUgc3RpbGwgc2F2ZWQgbG9jYWxseS4KCjxhIGhyZWY9InN0YWdlLWluLXR3by1jb21taXRzIj48L2E+CiMjIyBJIHdhbnQgdG8gYWRkIGNoYW5nZXMgaW4gb25lIGZpbGUgdG8gdHdvIGRpZmZlcmVudCBjb21taXRzCgpgZ2l0IGFkZGAgd2lsbCBhZGQgdGhlIGVudGlyZSBmaWxlIHRvIGEgY29tbWl0LiBgZ2l0IGFkZCAtcGAgd2lsbCBhbGxvdyB0byBpbnRlcmFjdGl2ZWx5IHNlbGVjdCB3aGljaCBjaGFuZ2VzIHlvdSB3YW50IHRvIGFkZC4KCjxhIGhyZWY9InVuc3RhZ2luZy1lZGl0cy1hbmQtc3RhZ2luZy10aGUtdW5zdGFnZWQiPjwvYT4KIyMjIEkgd2FudCB0byBzdGFnZSBteSB1bnN0YWdlZCBlZGl0cywgYW5kIHVuc3RhZ2UgbXkgc3RhZ2VkIGVkaXRzCgpUaGlzIGlzIHRyaWNreS4gVGhlIGJlc3QgSSBmaWd1cmUgaXMgdGhhdCB5b3Ugc2hvdWxkIHN0YXNoIHlvdXIgdW5zdGFnZWQgZWRpdHMuIFRoZW4sIHJlc2V0LiBBZnRlciB0aGF0LCBwb3AgeW91ciBzdGFzaGVkIGVkaXRzIGJhY2ssIGFuZCBhZGQgdGhlbS4KCmBgYHNoCiQgZ2l0IHN0YXNoIC1rCiQgZ2l0IHJlc2V0IC0taGFyZAokIGdpdCBzdGFzaCBwb3AKJCBnaXQgYWRkIC1BCmBgYAo=';
    return (
      <div className="home-page">
        <Layout.ContentGrid>
          <section className="search-wrapper">
            <SearchBox />
          </section>
          <section className="markdown-wrapper">
            <MarkdownViewer mdInput={base64Md} />
          </section>
        </Layout.ContentGrid>
      </div>
    );
  }
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string
};
