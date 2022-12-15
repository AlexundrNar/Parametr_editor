import React from "react";
import "./App.css";

interface Props {
  params: Param[];
  model: Model;
}

interface Param {
  id: number;
  name: string;
  type?: "string" | "number" | "[]";
}

interface Model {
  paramValues: ParamValue[];
  //colors: Color[];             - Здесь массив цветов никуда не ведет. Не уверен был, надо ли было мне доп. параметры делать? Оставил комментом
}

interface ParamValue {
  paramId: number;
  value: string;
}

type State = {
  model: Model
};

const params = [
  {
    id: 1,
    name: "Назначение",
  },
  {
    id: 2,
    name: "Длина",
  },
];

const model = {
  paramValues: [
    {
      paramId: 1,
      value: "повседневное",
    },
    {
      paramId: 2,
      value: "макси",
    },
  ],
};

class ParamEditor extends React.Component<Props, State> {
  params: Param[]
  model: Model
  valInput: React.RefObject<HTMLInputElement>;
  
  constructor(props: Props) {
    super(props)
    this.params = params
    this.model = model
    this.state = {model: model}
    this.valInput = React.createRef()
  }
    

  public getModel(): Model {
    return this.state.model;
  }

  render() {
    return (
      <div className="main">
          <div className="list">
            {this.params.map(param => <div key={param.id}>
              <span>{param.name}</span>
            </div>)}
          </div>

          <div>
            {this.model.paramValues.map(model => <div key={model.paramId}>
              <input defaultValue={model.value} ref={this.valInput} onChange={this.getModel} />
            </div>)}
          </div>
      </div>
    );
  }
}

export default ParamEditor;
