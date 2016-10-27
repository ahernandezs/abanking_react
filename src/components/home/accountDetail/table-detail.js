import React from 'react';
import { Link } from 'react-router';

import {    Row, Col, Table, InputGroup, InputGroupButton, Input, Tooltip,
            ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class Tooltipcircle extends React.Component{
    constructor(props) {
        super(props);
        this.togglet = this.togglet.bind(this);
        this.state = {
            tooltipOpen: false
        };
    }
    togglet(){
        this.setState({
            tooltipOpen: !this.state.tooltipOpen
        });
    }
    render(){
        return(
            <span>
                <div className={this.props.circle} id={'Tooltip-' + this.props.id}></div>
                <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.togglet}>
                    {this.props.item}
                </Tooltip>
            </span>
        );
    }
}

export default class TableDetail extends React.Component {
    constructor(props) {
      super(props);

      this.toggled = this.dropdown.bind(this);

      this.state = {
        dropdownOpen: false
      };
    }
    dropdown() {
      this.setState({
        dropdownOpen: !this.state.dropdownOpen
      });
    }
    render() {
        return (
            <div id="TableDetail">
                <Row>
                    <Col xs="12" md="8">
                        <div className="generalTitle">
                            <p>Clásica ***1581</p>
                        </div>
                        <InputGroup>
                            <Input id="mov" placeholder="Buscar movimientos" size="sm"/>
                            <InputGroupButton color="search"> </InputGroupButton>
                            <InputGroupButton>
                                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggled}>
                                    <DropdownToggle caret size="sm" color="search"></DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem >PDF</DropdownItem>
                                        <DropdownItem >XML</DropdownItem>
                                    </DropdownMenu>
                                </ButtonDropdown>
                            </InputGroupButton>
                        </InputGroup>

                        <Table responsive hover size="sm">
                            <thead>
                                <tr>
                                    <th>Fecha</th>
                                    <th>Establecimiento</th>
                                    <th>Descripción</th>
                                    <th>Monto</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><span>AGO</span><br /><span>18</span></td>
                                    <td>
                                        <Link to="/transactionDetail" activeClassName="active">Palacio de hierro</Link>
                                    </td>
                                    <td>Pago</td>
                                    <td className="text-danger"><span>-$5,000.00</span></td>
                                    <td>
                                        <Tooltipcircle key="1" item="Pendiente" circle="circle-p" id="1"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>AGO</span><br /><span>18</span></td>
                                    <td>
                                        <Link to="/transactionDetail" activeClassName="active">American Express</Link>
                                    </td>
                                    <td>Pago</td>
                                    <td className="text-danger"><span>-$1,500.00</span></td>
                                    <td>
                                        <Tooltipcircle key="2" item="Confirmada" circle="circle-s" id="2"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>AGO</span><br /><span>15</span></td>
                                    <td>
                                        <Link to="/transactionDetail" activeClassName="active">Depósito<br /><small>Nómina quincenal LIT SA de CV</small></Link>
                                    </td>
                                    <td>Depósito</td>
                                    <td><span>$25,000.00</span></td>
                                    <td>
                                        <Tooltipcircle key="3" item="Confirmada" circle="circle-s" id="3"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>AGO</span><br /><span>10</span></td>
                                    <td>
                                        <Link to="/transactionDetail" activeClassName="active">Starbucks</Link>
                                    </td>
                                    <td>Restaurante</td>
                                    <td className="text-danger"><span>-$300</span></td>
                                    <td>
                                        <Tooltipcircle key="4" item="Pendiente" circle="circle-p" id="4"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>AGO</span><br /><span>09</span></td>
                                    <td>
                                        <Link to="/transactionDetail" activeClassName="active">Deportes Martí</Link>
                                    </td>
                                    <td>Departamentales</td>
                                    <td className="text-danger"><span>-$5,000.00</span></td>
                                    <td>
                                        <Tooltipcircle key="5" item="Pendiente" circle="circle-p" id="5"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>AGO</span><br /><span>07</span></td>
                                    <td>
                                        <Link to="/transactionDetail" activeClassName="active">Liverpool</Link>
                                    </td>
                                    <td>Departamentales</td>
                                    <td className="text-danger"><span>$-5,000.00</span></td>
                                    <td>
                                        <Tooltipcircle key="6" item="Confirmada" circle="circle-s" id="6"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>Jul</span><br /><span>16</span></td>
                                    <td>
                                        <Link to="/transactionDetail" activeClassName="active">Depósito</Link>
                                    </td>
                                    <td>Depósito</td>
                                    <td><span>$38,000.00</span></td>
                                    <td>
                                        <Tooltipcircle key="7" item="Confirmada" circle="circle-s" id="7"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td><span>Jul</span><br /><span>01</span></td>
                                    <td>
                                        <Link to="/transactionDetail" activeClassName="active">Apple</Link>
                                    </td>
                                    <td>Electrónica</td>
                                    <td className="text-danger"><span>$-46,999.00</span></td>
                                    <td>
                                        <Tooltipcircle key="8" item="Confirmada" circle="circle-s" id="8"/>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs="12" md="4">
                        <div className="generalTitle">
                            <p>
                                $ 18,980.80 <span>MXN</span><br />
                                <small>Total disponible</small>
                            </p>
                        </div>
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        );
    }
}
