import {useState, useEffect} from 'react';
import perfil from './images/imgPerfil.jpeg';
import './App.css';
import axios from 'axios'


function App() {
   
 const [products, setProducts] = useState([]);
 const [valorStock, setValorStock] = useState(0);
 const [ultimoProducto, setUltimoProducto] = useState([]);
 const [descripcionProducto, setDescripcionProducto]=useState([]);
 const [idProducto, setIdProducto]=useState(0);
 const [users, setUsers] = useState([])
 const [cantidadUsers, setTotalUsers] = useState(0);
 let cargarImagen = require.context("./images/img/", true);

   useEffect(() => {
    axios
    .request({
      url: 'http://localhost:3001/api',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
    .then(function (response) {
      // handle success
     setProducts(response.data.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
   }, []) 

   useEffect(() => {
    let total = 0
    products.forEach(item => {
      total = total + (item.cantidad * item.precio);
    })
     setValorStock(total)
   }, [products] )

   useEffect(() => {
   axios
    .request({
      url: 'http://localhost:3001/api',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
    .then(function (response) {
	  let posicion=response.data.total-1;
	  let id=response.data.total;
      let imagenProducto=response.data.data[posicion].imagen;
	  let descripcionP=response.data.data[posicion].descripcion;
	  setUltimoProducto(imagenProducto)
	  setDescripcionProducto(descripcionP)
	  setIdProducto(id);
    })
    .catch(function (error) {
      
      console.log(error);
    });
   }, [products]) 
   /*useEffect(() => {
    let posicion=(products.length-1);
	
    let imagen = products[posicion].imagen;
	setUltimoProducto(imagen)
   }, [products] )*/
   useEffect(() => {
    axios
    .request({
      url: 'http://localhost:3001/user/api',
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
      },
    })
    .then(function (response) {
      // handle success
     setUsers(response.data.data)
	 setTotalUsers(response.data.total)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
   }, [users]) 


  return (
	<div id="wrapper"> 

		
		<ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

			
			<a class="sidebar-brand d-flex align-items-center justify-content-center" href="/">
				<div class="sidebar-brand-icon">
					<i class="fas fa-chart-line"></i>
				</div>
				<div class="sidebar-brand-text mx-3">Admin</div>
			</a>

			
			<hr class="sidebar-divider my-0"/>

			
			<li class="nav-item active">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span></a>
			</li>

			
			<hr class="sidebar-divider"/>

		
			<div class="sidebar-heading">Actions</div>

			
			<li class="nav-item">
				<a class="nav-link collapsed" href="/">
					<i class="fas fa-fw fa-folder"></i>
					<span>Pages</span>
				</a>
			</li>

			
			<li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-chart-area"></i>
					<span>Charts</span></a>
			</li>

		
			<li class="nav-item">
				<a class="nav-link" href="/">
					<i class="fas fa-fw fa-table"></i>
					<span>Tables</span></a>
			</li>

			
			<hr class="sidebar-divider d-none d-md-block"/>
		</ul>
		
		<div id="content-wrapper" class="d-flex flex-column">

			
			<div id="content">

				
				<nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

					
					<button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
						<i class="fa fa-bars"></i>
					</button>

					
					<ul class="navbar-nav ml-auto">

						
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="alertsDropdown">
								<i class="fas fa-bell fa-fw"></i>
								
								<span class="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						
						<li class="nav-item dropdown no-arrow mx-1">
							<a class="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i class="fas fa-envelope fa-fw"></i>
								
								<span class="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div class="topbar-divider d-none d-sm-block"></div>

						
						<li class="nav-item dropdown no-arrow">
							<a class="nav-link dropdown-toggle" href="/" id="userDropdown">
								<span class="mr-2 d-none d-lg-inline text-gray-600 small">Usuario Administrador</span>
								<img class="img-profile rounded-circle" src= {perfil} width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				

				
				<div class="container-fluid">

					
					<div class="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 class="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					
					<div class="row">

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-primary shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-primary text-uppercase mb-1"> Productos en Base de Datos</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">{products.length}</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-clipboard-list fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-success shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Valor total de stock</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800"> $ {valorStock}</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>

						
						<div class="col-md-4 mb-4">
							<div class="card border-left-warning shadow h-100 py-2">
								<div class="card-body">
									<div class="row no-gutters align-items-center">
										<div class="col mr-2">
											<div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Usuarios registrados
											</div>
											<div class="h5 mb-0 font-weight-bold text-gray-800">{cantidadUsers}</div>
										</div>
										<div class="col-auto">
											<i class="fas fa-user-check fa-2x text-gray-300"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					
					<div class="row">
				
						<div class="col-lg-6 mb-4">
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Último producto agregado</h6>
								</div>
								<div class="card-body">
									<div class="text-center">
										<img class="img-fluid px-3 px-sm-4 mt-3 mb-4" src={`http://localhost:3001/img/${ultimoProducto}`} alt={ultimoProducto}></img>
									</div>
									<p>{descripcionProducto}</p>
									<a target="_blank" rel="nofollow" href={`http://localhost:3001/productos/detalledeproducto/${idProducto}`}>Ver detalle del producto</a>
								</div>
							</div>
						</div>

						
						<div class="col-lg-6 mb-4">						
							<div class="card shadow mb-4">
								<div class="card-header py-3">
									<h6 class="m-0 font-weight-bold text-primary">Categorías en Base de Datos</h6>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 01
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 02
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 03
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 04
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 05
												</div>
											</div>
										</div>
										<div class="col-lg-6 mb-4">
											<div class="card bg-info text-white shadow">
												<div class="card-body">
													Category 06
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			
			</div>
		

		
			<footer class="sticky-footer bg-white">
				<div class="container my-auto">
					<div class="copyright text-center my-auto">
						<span>Copyright &copy; Dashboard 2020</span>
					</div>
				</div>
			</footer>
		

		</div>
	

	</div>

  );
}

export default App;
