import React, { Component } from "react";
import { connect } from "react-redux";

import Field from "../components/Field";
import Input from "../components/Input";
import Select from "../components/Select";
import Button from "../components/Button";
import { fetchCountries, saveForm } from "../actions";

const initialState = { name: "", surname: "", country: "", birthday: "" };

class Form extends Component {
  state = initialState;

  componentDidMount() {
    this.props.fetchCountries();
  }

  handleChange = field => ev => this.setState({ [field]: ev.target.value });

  handleSubmit = ev => {
    ev.preventDefault();
    this.props.submitForm(this.state);
    this.form.reset();
    this.setState(initialState);
  };

  render() {
    const { countries, translations, loading } = this.props;
    return (
      <form ref={form => (this.form = form)} onSubmit={this.handleSubmit}>
        <Field label={translations.name}>
          <Input
            placeholder={translations.name_placeholder}
            onChange={this.handleChange("name")}
            required
          />
        </Field>
        <Field label={translations.surname}>
          <Input
            placeholder={translations.surname_placeholder}
            onChange={this.handleChange("surname")}
            required
          />
        </Field>
        <Field label={translations.countries}>
          <Select
            placeholder={translations.countries}
            options={countries}
            onChange={this.handleChange("country")}
            required
            disabled={loading}
          />
        </Field>
        <Field label={translations.birthday}>
          <Input
            type="date"
            onChange={this.handleChange("birthday")}
            required
          />
        </Field>
        <Field>
          <Button type="submit">{translations.save}</Button>
        </Field>
      </form>
    );
  }
}

const mapStateToProps = ({ countries, translations, loading }) => ({
  countries,
  translations,
  loading
});
const mapDispatchToProps = dispatch => ({
  submitForm: form => dispatch(saveForm(form)),
  fetchCountries: () => dispatch(fetchCountries())
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
