const React = require('react');


module.exports = function Layout({ children, login}) {
  return (
    <html lang="en">

      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Raleway&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Gruppo&family=Lacquer&display=swap" rel="stylesheet"/>
        
        <link rel="stylesheet" href="/stylesheets/application.css" />
        <link rel="stylesheet" href="/stylesheets/Lacquer" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossOrigin="anonymous" />

        {/* <script defer src="/js/application.js" /> */}

        <title>Alco</title>
      </head>

      <body>
        <header role="banner" className="mar-t-5 pad-t-2 pad-b-4 pad-s-1 wrap-float bg-white">
          <div className="max-w-700 center wrap-float">
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: '#ffc107' }}>
              <div className="container-fluid">
                <a className="navbar-brand" href="/">
                  <svg style={{display:"none"}}>
                    <symbol id='logo' viewBox='0 0 1000 1000'>
                    <g><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"><path d="M1083.5,4976c-126.3-84.2-141.6-204.8-42.1-335c49.8-67,3273.1-4054,3332.4-4122.9c23-28.7,23-44-7.7-124.4c-53.6-137.8-47.9-350.3,15.3-488.1c59.3-128.2,164.6-248.8,277.5-315.8l82.3-47.9v-1297.7c0-1378.1-5.7-1496.8-90-1730.3c-84.2-233.5-216.3-402-428.7-547.4c-103.4-70.8-187.6-155-246.9-245c-23-36.4-120.6-70.8-522.5-185.7c-269.9-78.5-528.3-143.5-574.2-143.5c-122.5,0-170.4-55.5-116.8-132.1l28.7-40.2h2208.8h2208.8l28.7,42.1c24.9,36.4,26.8,47.9,3.8,82.3c-19.1,28.7-53.6,40.2-137.8,49.8c-95.7,7.7-970.4,248.8-1033.6,283.3c-13.4,5.7-57.4,55.5-101.4,111c-42.1,55.5-128.3,134-187.6,174.2c-283.3,193.3-432.6,428.8-493.8,780.9c-23,137.8-28.7,390.5-28.7,1481.5v1316.9l82.3,47.9c279.5,164.6,403.9,522.5,285.2,823c-24.9,63.2-24.9,76.6,0,105.3c258.4,298.6,3370.6,4170.8,3386,4209c28.7,76.6,5.8,162.7-61.2,227.8l-57.4,55.5l-3872.1,5.7l-3872.2,3.8L1083.5,4976z M8603.8,4696.5c-1.9-9.6-243.1-312-532.1-669.9l-526.4-650.8l-1791.6-1.9H3962.2l170.4-329.2c93.8-181.8,176.1-336.9,183.7-344.5c7.7-7.7,47.8-1.9,90,13.4c116.8,42.1,313.9,36.4,444.1-13.4c153.1-57.4,310.1-214.4,367.5-369.4c59.3-155,51.7-377.1-15.3-514.9c-45.9-93.8-145.5-208.6-231.6-266.1l-45.9-32.5l61.2-124.4c36.4-72.7,55.5-137.8,47.9-157c-30.6-88-101.4-122.5-187.6-90c-17.2,7.7-65.1,74.7-107.2,151.2l-74.6,137.8l-112.9,13.4c-214.4,24.9-421.1,166.5-514.9,350.3c-105.3,204.8-90,482.3,36.4,658.4l38.3,53.6l-463.2,895.8c-254.6,491.9-480.4,911.1-499.6,930.2c-82.3,70.8-206.7,19.1-206.7-88c0-34.5,82.3-214.4,212.5-465.1l210.5-409.6h-455.5l-455.5,1.9l-526.4,650.8c-289,357.9-528.3,658.4-532.1,669.9c-3.8,9.6,1334.1,17.2,3604.2,17.2C7175.9,4713.7,8607.6,4706.1,8603.8,4696.5z"/><path d="M4725.9,2445.6c-124.4-53.6-145.5-231.6-40.2-327.3c59.3-53.6,191.4-49.8,254.6,9.6c103.3,97.6,72.7,264.1-55.5,319.6C4806.3,2480,4804.4,2480,4725.9,2445.6z"/></g></g>
                    </symbol>
                  </svg>
                  <svg className='logo'><use xlinkHref='#logo'></use></svg>
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  {login ? (
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <span className="nav-link">
                          Hi,
                          {' '}
                          {login}
                        </span>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/kabinet">
                          Your creations
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/logout">
                          Logout
                        </a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="/login">
                          Login
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="/register">
                          Registration
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </nav>

            <div className="logo-container" style={{ marginTop: '20px' }}>
              {/* <img className="logo center block" src="/images/logo.png" alt="logo" /> */}
              <h1 className='projName' style={{color:"#f8cf69", textAlign:"center", paddingBottom:"30px",fontFamily:"'Lacquer', cursive"}}>drink with Varya</h1>
            </div>
          </div>
        </header>
        <div className="bg-dk-green pad-t-2 pad-s-1 pad-b-8 mar-b-16 c-white">
          <div className="max-w-700 center mainContentPage">
            <div className="leftBtns">
              <a href='/'><button className='btn btn-outline-warning' style={{width:"200px"}}>Home</button></a>
              <a href='/ingridients'><button className='btn btn-outline-warning' style={{width:"200px"}}>Choose ingridient</button></a>
              <a href='/random'><button className='btn btn-outline-warning' style={{width:"200px"}}>Get Random</button></a>
              <a href='/spirits'><button className='btn btn-outline-warning' style={{width:"200px"}}>Choose spirits</button></a>
            </div>
            {children}
          </div>
        </div>
      </body>

    </html>
  );
};
