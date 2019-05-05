import React, { Component } from 'react';
import moment from 'moment';
import api from '../../services/api';

import logo from '../../assets/logo.png';

import { Container, Form } from './styles';

import CompareList from '../../components/CompareList';

export default class Main extends Component {
  state = {
    repositoryError: false,
    repositoryInput: '',
    repositories: [],
  };

  handleAddRespository = async (e) => {
    const { repositoryInput, repositories } = this.state;

    e.preventDefault();

    try {
      const { data: repository } = await api.get(`/repos/${repositoryInput}`);

      // Crio nova propriedade chamada lastCommit e envio pro componente
      repository.lastCommit = moment(repository.pushed_at).fromNow();

      this.setState({
        repositoryError: false,
        repositoryInput: '',
        repositories: [...repositories, repository],
      });
    } catch (err) {
      this.setState({ repositoryError: true });
    }
  };

  render() {
    const { repositoryError, repositoryInput, repositories } = this.state;
    return (
      <Container>
        <img src={logo} alt="GitHub Compare" />

        <Form withError={repositoryError} onSubmit={this.handleAddRespository}>
          <input
            type="text"
            placeholder="usuário/repositório"
            value={repositoryInput}
            onChange={e => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">OK</button>
        </Form>

        <CompareList repositories={repositories} />
      </Container>
    );
  }
}
