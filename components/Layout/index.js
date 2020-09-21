import Head from '../Head'
import Header from '../Header'
import Footer from '../Footer'

export default function Layout(props) {
  return (
    <>
      <Head/>
      <div className="wrapper">
        <Header />
          <div className={ "main-panel " + props.mainPanelStyle}>
            <div className={"container " + props.containerStyle } >
              <div className={"page-inner " + props.pageInnerStyle }>
                {props.children}
              </div>
            </div>
          </div>
        <Footer />
      </div>
    </>
  )
}
