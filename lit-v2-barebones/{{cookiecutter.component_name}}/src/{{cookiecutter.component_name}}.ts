import { LitElement } from "lit";
import { customElement } from "lit/decorators.js";

@customElement('{{cookiecutter.component_name}}')
class {{ cookiecutter.class_name }} extends LitElement {
    override render() {
        return "Hello World!";
    }
}
