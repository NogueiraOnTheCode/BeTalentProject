import React, { useState, useEffect } from 'react';
import './app.css';
import Navbar from './components/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importando FontAwesomeIcon
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Ícones de seta
import { faSearch } from '@fortawesome/free-solid-svg-icons'; // Ícone de lupa


function App() {
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState('');
  const [expanded, setExpanded] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    fetch('http://localhost:3000/employees')
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error('Erro ao buscar funcionários:', error));

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filteredEmployees = employees.filter((employee) => {
    const searchLowerCase = search.toLowerCase();
    return (
      employee.name.toLowerCase().includes(searchLowerCase) ||
      employee.job.toLowerCase().includes(searchLowerCase) ||
      employee.phone.includes(searchLowerCase)
    );
  });

  const toggleExpand = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };

  return (
    <div>
      <Navbar />
      <div className="content">
        <h1 className="title">Funcionários</h1>
        <input
          type="text"
          className="search-bar"
          id="search"
          placeholder="Pesquisar"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label='Pesquisar'
        />
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div>
        <table className={`funcionarios-table ${isMobile ? 'mobile' : ''}`}>
        <thead>
            <tr>
              <th className='foto-th'>
                {/* Ícone em dispositivos móveis */}
                
                <h2>FOTO</h2>
                
              </th>
              <th className='nome-th'>
                <h2>NOME</h2>
                <div className="circle-icon"></div>
                </th>
              
                
                
              {!isMobile && (
                <>
                  <th><h2>CARGO</h2></th>
                  <th><h2>DATA DE ADMISSÃO</h2></th>
                  <th><h2>TELEFONE</h2></th>
                </>
              )}
            </tr>
          </thead>

          <tbody>
            {filteredEmployees.map((employee) => (
              <React.Fragment key={employee.id}>
                <tr>
                  <td><img src={employee.image} alt={employee.name} width="50px" height="50px" /></td>
                  <td className="name-column">
                    <h3>{employee.name}</h3>
                    {isMobile && (
                      <button
                        className="expand-button"
                        onClick={() => toggleExpand(employee.id)}
                        aria-label="Expandir"
                      >
                        <FontAwesomeIcon icon={expanded[employee.id] ? faChevronUp : faChevronDown} />
                      </button>
                    )}
                  </td>
                  {!isMobile && (
                    <>
                      <td><h3>{employee.job}</h3></td>
                      <td><h3>{new Date(employee.admission_date).toLocaleDateString()}</h3></td>
                      <td><h3>{employee.phone}</h3></td>
                    </>
                  )}
                </tr>
                {isMobile && expanded[employee.id] && (
                  <tr>
                    <td colSpan="2">
                      <div className="employee-details">
                        <p><strong>CARGO</strong> {employee.job}</p>
                        <p><strong>DATA DE ADMISSÃO</strong> {new Date(employee.admission_date).toLocaleDateString()}</p>
                        <p><strong>TELEFONE</strong> {employee.phone}</p>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;















