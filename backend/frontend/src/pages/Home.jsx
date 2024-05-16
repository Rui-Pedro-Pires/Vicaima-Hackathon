import React, { useState, useEffect } from 'react';
import api from '../api';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/home.css';
import { useNavigate } from 'react-router-dom';

// function Home() {
//     const [avaliacoes, setAvaliacoes] = useState([]);
//     const [userIsAuthorized, setUserIsAuthorized] = useState(false);
//     const username = localStorage.getItem('username');
//     const navigate = useNavigate();

//     useEffect(() => {
//         api.get('/api/check_group/')
//             .then(response => {
//                 if (response.data.is_superuser) {
//                     setUserIsAuthorized(true);
//                 }
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//             });
//     }, []);

//     useEffect(() => {
//         api.get('/api/user/avaliacoes/')
//             .then(response => {
//                 setAvaliacoes(response.data);
//             })
//             .catch(error => {
//                 console.error('There was an error!', error);
//             });
//     }, []);

//     // Group avaliacoes by avaliador
//     const avaliadores = avaliacoes.reduce((groups, avaliacao) => {
//         const key = avaliacao.avaliador;
//         if (!groups[key]) {
//             groups[key] = [];
//         }
//         groups[key].push(avaliacao);
//         return groups;
//     }, {});

//     if (!userIsAuthorized) {
//         console.log("notautorized");
//         const avaliadorNumber = username.split('_').pop();

//         return (
//             <Table striped bordered hover className="shadow">
//                 <thead className="thead-dark">
//                     <tr>
//                         <th>Avaliador</th>
//                         <th>Avaliados</th>
//                         <th>Data Inicial</th>
//                         <th>Data Final</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {Object.entries(avaliadores)
//                         .filter(([avaliador]) => avaliador === avaliadorNumber)  // Only include rows where the current user is the avaliador
//                         .map(([avaliador, avaliacoes], index) => (
//                             avaliacoes.map((avaliacao, subIndex) => (
//                                 <tr key={`${index}-${subIndex}`}>
//                                     <td>{avaliador}</td>
//                                     <td>{avaliacao.avaliado}</td>
//                                     <td>{avaliacao.data_inicial}</td>
//                                     <td>{avaliacao.data_final}</td>
//                                 </tr>
//                             ))
//                         ))}
//                 </tbody>
//             </Table>
//         );
//     }

//     const handleDelete = async (avaliadorToDelete, avaliadoToDelete) => {
//         const newAvaliacoes = avaliacoes.filter(avaliacao => !(avaliacao.avaliador === avaliadorToDelete && avaliacao.avaliado === avaliadoToDelete));
//         setAvaliacoes(newAvaliacoes);
//         try {
//             await api.delete(`/api/user/delete/${avaliadorToDelete}/${avaliadoToDelete}/`);
//             window.location.reload();
//         } catch (error) {
//             alert(error);
//         }
//     };

//     return (
//         <Container fluid className="container-padding-top">
//             <Row>
//                 <Col md={2} className="sidebar bg-light">
//                     {/* Sidebar content */}
//                 </Col>
//                 <Col md={10}>
//                     <h1 className="text-center mb-4 heading-margin-top">Avaliações</h1>
//                     <Table striped bordered hover className="shadow">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th>Avaliador</th>
//                                 <th>Avaliados</th>
//                                 <th>Data Inicial</th>
//                                 <th>Data Final</th>
//                                 <th>Actions</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {Object.entries(avaliadores).map(([avaliador, avaliacoes], index) => (
//                                 avaliacoes.map((avaliacao, subIndex) => (
//                                     <tr key={`${index}-${subIndex}`}>
//                                         <td>{avaliador}</td>
//                                         <td>{avaliacao.avaliado}</td>
//                                         <td>{avaliacao.data_inicial}</td>
//                                         <td>{avaliacao.data_final}</td>
//                                         <td>
//                                             <button onClick={() => handleDelete(avaliador, avaliacao.avaliado)}>Delete</button>
//                                             <button onClick={() => navigate('/evaluationForm')}>Form</button>
//                                         </td>
//                                     </tr>
//                                 ))
//                             ))}
//                         </tbody>
//                     </Table>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// export default Home;


function Home() {
  const [avaliacoes, setAvaliacoes] = useState([]);
  const [userIsAuthorized, setUserIsAuthorized] = useState(false);
  const username = localStorage.getItem('username');    useEffect(() => {
      api.get('/api/check_group/')
          .then(response => {
              if (response.data.is_superuser) {
                  setUserIsAuthorized(true);
              }
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
  }, []);    useEffect(() => {
      api.get('/api/user/avaliacoes/')
          .then(response => {
              setAvaliacoes(response.data);
          })
          .catch(error => {
              console.error('There was an error!', error);
          });
  }, []);    // Group avaliacoes by avaliador
  const avaliadores = avaliacoes.reduce((groups, avaliacao) => {
      const key = avaliacao.avaliador;
      if (!groups[key]) {
          groups[key] = [];
      }
      groups[key].push(avaliacao);
      return groups;
  }, {});
  if (!userIsAuthorized) {
      console.log("notautorized");
      const avaliadorNumber = username.split('_').pop();        return (
          <Table striped bordered hover className="shadow">
              <thead className="thead-dark">
                  <tr>
                      <th>Avaliador</th>
                      <th>Avaliados</th>
                      <th>Data Inicial</th>
                      <th>Data Final</th>
                  </tr>
              </thead>
              <tbody>
                  {Object.entries(avaliadores)
                      .filter(([avaliador]) => avaliador === avaliadorNumber)  // Only include rows where the current user is the avaliador
                      .map(([avaliador, avaliacoes], index) => (
                          avaliacoes.map((avaliacao, subIndex) => (
                              <tr key={`${index}-${subIndex}`}>
                                  <td>{avaliador}</td>
                                  <td>{avaliacao.avaliado}</td>
                                  <td>{avaliacao.data_inicial}</td>
                                  <td>{avaliacao.data_final}</td>
                              </tr>
                          ))
                      ))}
              </tbody>
          </Table>
      );
  }    const handleDelete = async (avaliadorToDelete, avaliadoToDelete) => {
      const newAvaliacoes = avaliacoes.filter(avaliacao => !(avaliacao.avaliador === avaliadorToDelete && avaliacao.avaliado === avaliadoToDelete));
      setAvaliacoes(newAvaliacoes);
      try {
          await api.delete(`/api/user/delete/${avaliadorToDelete}/${avaliadoToDelete}/`);
          window.location.reload();
      } catch (error) {
          alert(error);
      }
  };    return (
    <>
<style jsx>{`
            .container {
              background-color: #e9ecf0;
              display: flex;
              flex-direction: column;
              padding-bottom: 80px;
            }
            .header {
              background-color: #fff;
              display: flex;
              width: 100%;
              justify-content: space-between;
              align-items: center;
              padding: 8px 30px 8px 10px;
              gap: 20px;
              font-size: 16px;
              text-align: center;
              }

              @media (max-width: 991px) {
              .header {
                  flex-wrap: wrap;
                  padding-right: 20px;
              }
              }
            .logo {
              aspect-ratio: 3.33;
              object-fit: cover;
              object-position: center;
              width: 212px;
              max-width: 100%;
            }
            .navigation {
              display: flex;
              gap: 20px;
              margin: auto 0;
              }

              @media (max-width: 991px) {
              .navigation {
                  flex-wrap: wrap;
              }
              }

              .nav-link {
              font-family: Inter, sans-serif;
              flex-grow: 1;
              margin: auto 0;
              text-decoration: none;
              color: inherit;
              }

              .bordered {
              border: 1px solid rgba(0, 0, 0, 1);
              padding: 17px 20px;
              }

              .logout {
              background-color: #000;
              color: #fff;
              white-space: nowrap;
              padding: 16px 31px;
              }
            .main-wrapper {
              background-color: #fff;
              align-self: center;
              display: flex;
              margin-top: 115px;
              width: 100%;
              max-width: 1251px;
              flex-direction: column;
              padding: 39px 27px 80px;
              flex-wrap: wrap;
            }
            .main-header {
              display: flex;
              gap: 20px;
              font-size: 20px;
              color: #000;
              font-weight: 600;
              flex-wrap: wrap;
              padding-right: 20px;
            }
            .main-header-title,
            .main-header-subtitle {
              font-family: Inter, sans-serif;
            }
            .main-content {
              border: 1px solid rgba(0, 0, 0, 1);
              background-color: #000;
              margin-top: 9px;
              height: 1px;
            }

            .process-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 20px;
              margin: 15px 0 273px;
              flex-wrap: wrap;
            }
            .process-info {
              display: flex;
              flex-direction: column;
              gap: 20px;
              text-align: start;
              justify-content: space-between;
              flex-wrap: wrap;
            }

            .process {
              display: flex;
              flex-direction: column;
              flex-grow: 1;
              gap: 20px;
            }
            .process-number,
            .evaluator-number,
            .evaluated-number,
            .status-number,
            .status,
            .daysRemaining {
              font-family: Inter, sans-serif;
            }
            .evaluator-info,
            .evaluated-info {
              display: flex;
              gap: 20px;
              flex-wrap: wrap;
            }
            .options {
              display: flex;
              gap: 15px;
              font-size: 16px;
              font-weight: 400;
              text-align: center;
              flex-wrap: wrap;
            }
            .option {
              padding: 16px 14px;
              font-family: Inter, sans-serif;
              text-align: center;
              white-space: nowrap;
            }
            .bordered {
              border: 1px solid rgba(0, 0, 0, 1);
            }
            .red-bg {
              background-color: #dc0232;
              color: #fff;
            }
            .light-bg {
              background-color: #bfd3eb;
            }
            .flex-col-center {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .process-line {
              height: 18px;
              border: 1px solid rgba(0, 0, 0, 1);
            }
            .italic-text {
              color: #000;
              font: italic 400 16px Inter, -apple-system, Roboto, Helvetica, sans-serif;
            }
          `}</style>
        <div>
        <header className="header">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/eab3563f117d37a0aba7d9f1e0437d07e9641ada43a08ad0c0e29d55a22d1107?apiKey=d4ef87dbdadc4d0c82074c04dc070338&" className="logo" alt="Logo" />
            <nav className="navigation">
                <a href="/" className="nav-link">
                    Home
                </a>
                <a href="/event" className="nav-link bordered">
                    Criar evento
                </a>
                <a href="/upload" className="nav-link bordered">
                    Novo registo
                </a>
                <a href="/logout" className="nav-link bordered" style={{ backgroundColor: 'black', color: 'white' }}>
                    Logout
                </a>
            </nav>
        </header>
        <Container fluid className="container-padding-top">
          <Row>
              <Col md={2} className="sidebar bg-light">
                  {/* Sidebar content */}
              </Col>
              <Col md={10}>
                  <h1 className="text-center mb-4 heading-margin-top">Avaliações</h1>
                  <Table striped bordered hover className="shadow" style={{ margin: '10px', padding: '20px' }}>
                      <thead className="thead-dark">
                          <tr>
                              <th  style={{ margin: '100px', padding: '10px 20px'}}>Avaliador</th>
                              <th  style={{ margin: '100px', padding: '10px 20px'}}>Avaliados</th>
                              <th  style={{ margin: '100px', padding: '10px 20px'}}>Data Inicial</th>
                              <th  style={{ margin: '100px', padding: '10px 20px'}}>Data Final</th>
                              <th  style={{ margin: '100px', padding: '10px 20px'}}>Actions</th>
                          </tr>
                      </thead>
                      <tbody>
                          {Object.entries(avaliadores).map(([avaliador, avaliacoes], index) => (
                              avaliacoes.map((avaliacao, subIndex) => (
                                  <tr key={`${index}-${subIndex}`}>
                                      <td>{avaliador}</td>
                                      <td>{avaliacao.avaliado}</td>
                                      <td>{avaliacao.data_inicial}</td>
                                      <td>{avaliacao.data_final}</td>
                                      <td>
                                          <button onClick={() => handleDelete(avaliador, avaliacao.avaliado)} style={{
                                              background: '#DC0232',
                                              color: 'white',
                                              border: 'none',
                                              padding: '10px 20px',
                                              margin: '2px',
                                              cursor: 'pointer',
                                              borderRadius: '5px',}}>Apagar</button>
                                          <button onClick={() => navigate('/evaluationForm')} style={{
                                              background: '#000000',
                                              color: 'white',
                                              border: 'none',
                                              padding: '10px 20px',
                                              margin: '2px',
                                              cursor: 'pointer',
                                              borderRadius: '5px',}}>Ficha</button>

                                      </td>
                                  </tr>
                              ))
                          ))}
                      </tbody>
                  </Table>
              </Col>
          </Row>
      </Container>
      </div>
    </>
  );
}

export default Home
