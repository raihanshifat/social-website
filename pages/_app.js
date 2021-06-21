import App from "next/app";
import Layout from "../components/Layout/Layout";
import "semantic-ui-css/semantic.min.css";
import {Provider} from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../store/store';
import '../styles/globals.css'
class MyApp extends App {
  render() {
    const { Component,pageProps } = this.props;

    return (
      <Provider store={store}>

      
      <Layout>
        <Component {...pageProps}/>
      </Layout>
      </Provider>
    );
  }
}
const makestore=()=>store;
const wrapper=createWrapper(makestore);

export default wrapper.withRedux(MyApp);
