export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Contato: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  ContatoScreen: undefined;
};

export type Curso = {
  _id : string,
  codigo: number,
  descricao: string,
  cargaHoraria: number,
  preco: number,
  categoria: string
}