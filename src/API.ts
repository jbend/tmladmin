/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateTMApplicationInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  target: string,
  icon?: string | null,
  linkType: LinkType,
  requiresElevatedPrivledges: boolean,
};

export enum LinkType {
  application = "application",
  url = "url",
  folder = "folder",
}


export type ModelTMApplicationConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  target?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  linkType?: ModelLinkTypeInput | null,
  requiresElevatedPrivledges?: ModelBooleanInput | null,
  and?: Array< ModelTMApplicationConditionInput | null > | null,
  or?: Array< ModelTMApplicationConditionInput | null > | null,
  not?: ModelTMApplicationConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelLinkTypeInput = {
  eq?: LinkType | null,
  ne?: LinkType | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateTMApplicationInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  target?: string | null,
  icon?: string | null,
  linkType?: LinkType | null,
  requiresElevatedPrivledges?: boolean | null,
};

export type DeleteTMApplicationInput = {
  id?: string | null,
};

export type CreateTMAppGroupInput = {
  id?: string | null,
  name: string,
};

export type ModelTMAppGroupConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTMAppGroupConditionInput | null > | null,
  or?: Array< ModelTMAppGroupConditionInput | null > | null,
  not?: ModelTMAppGroupConditionInput | null,
};

export type UpdateTMAppGroupInput = {
  id: string,
  name?: string | null,
};

export type DeleteTMAppGroupInput = {
  id?: string | null,
};

export type ModelTMApplicationFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  target?: ModelStringInput | null,
  icon?: ModelStringInput | null,
  linkType?: ModelLinkTypeInput | null,
  requiresElevatedPrivledges?: ModelBooleanInput | null,
  and?: Array< ModelTMApplicationFilterInput | null > | null,
  or?: Array< ModelTMApplicationFilterInput | null > | null,
  not?: ModelTMApplicationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTMAppGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTMAppGroupFilterInput | null > | null,
  or?: Array< ModelTMAppGroupFilterInput | null > | null,
  not?: ModelTMAppGroupFilterInput | null,
};

export type CreateTmApplicationMutationVariables = {
  input: CreateTMApplicationInput,
  condition?: ModelTMApplicationConditionInput | null,
};

export type CreateTmApplicationMutation = {
  createTMApplication:  {
    __typename: "TMApplication",
    id: string,
    name: string,
    description: string | null,
    target: string,
    icon: string | null,
    linkType: LinkType,
    requiresElevatedPrivledges: boolean,
  } | null,
};

export type UpdateTmApplicationMutationVariables = {
  input: UpdateTMApplicationInput,
  condition?: ModelTMApplicationConditionInput | null,
};

export type UpdateTmApplicationMutation = {
  updateTMApplication:  {
    __typename: "TMApplication",
    id: string,
    name: string,
    description: string | null,
    target: string,
    icon: string | null,
    linkType: LinkType,
    requiresElevatedPrivledges: boolean,
  } | null,
};

export type DeleteTmApplicationMutationVariables = {
  input: DeleteTMApplicationInput,
  condition?: ModelTMApplicationConditionInput | null,
};

export type DeleteTmApplicationMutation = {
  deleteTMApplication:  {
    __typename: "TMApplication",
    id: string,
    name: string,
    description: string | null,
    target: string,
    icon: string | null,
    linkType: LinkType,
    requiresElevatedPrivledges: boolean,
  } | null,
};

export type CreateTmAppGroupMutationVariables = {
  input: CreateTMAppGroupInput,
  condition?: ModelTMAppGroupConditionInput | null,
};

export type CreateTmAppGroupMutation = {
  createTMAppGroup:  {
    __typename: "TMAppGroup",
    id: string,
    name: string,
    application:  Array< {
      __typename: "TMApplication",
      id: string,
      name: string,
      description: string | null,
      target: string,
      icon: string | null,
      linkType: LinkType,
      requiresElevatedPrivledges: boolean,
    } | null > | null,
  } | null,
};

export type UpdateTmAppGroupMutationVariables = {
  input: UpdateTMAppGroupInput,
  condition?: ModelTMAppGroupConditionInput | null,
};

export type UpdateTmAppGroupMutation = {
  updateTMAppGroup:  {
    __typename: "TMAppGroup",
    id: string,
    name: string,
    application:  Array< {
      __typename: "TMApplication",
      id: string,
      name: string,
      description: string | null,
      target: string,
      icon: string | null,
      linkType: LinkType,
      requiresElevatedPrivledges: boolean,
    } | null > | null,
  } | null,
};

export type DeleteTmAppGroupMutationVariables = {
  input: DeleteTMAppGroupInput,
  condition?: ModelTMAppGroupConditionInput | null,
};

export type DeleteTmAppGroupMutation = {
  deleteTMAppGroup:  {
    __typename: "TMAppGroup",
    id: string,
    name: string,
    application:  Array< {
      __typename: "TMApplication",
      id: string,
      name: string,
      description: string | null,
      target: string,
      icon: string | null,
      linkType: LinkType,
      requiresElevatedPrivledges: boolean,
    } | null > | null,
  } | null,
};

export type GetTmApplicationQueryVariables = {
  id: string,
};

export type GetTmApplicationQuery = {
  getTMApplication:  {
    __typename: "TMApplication",
    id: string,
    name: string,
    description: string | null,
    target: string,
    icon: string | null,
    linkType: LinkType,
    requiresElevatedPrivledges: boolean,
  } | null,
};

export type ListTmApplicationsQueryVariables = {
  filter?: ModelTMApplicationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTmApplicationsQuery = {
  listTMApplications:  {
    __typename: "ModelTMApplicationConnection",
    items:  Array< {
      __typename: "TMApplication",
      id: string,
      name: string,
      description: string | null,
      target: string,
      icon: string | null,
      linkType: LinkType,
      requiresElevatedPrivledges: boolean,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetTmAppGroupQueryVariables = {
  id: string,
};

export type GetTmAppGroupQuery = {
  getTMAppGroup:  {
    __typename: "TMAppGroup",
    id: string,
    name: string,
    application:  Array< {
      __typename: "TMApplication",
      id: string,
      name: string,
      description: string | null,
      target: string,
      icon: string | null,
      linkType: LinkType,
      requiresElevatedPrivledges: boolean,
    } | null > | null,
  } | null,
};

export type ListTmAppGroupsQueryVariables = {
  filter?: ModelTMAppGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTmAppGroupsQuery = {
  listTMAppGroups:  {
    __typename: "ModelTMAppGroupConnection",
    items:  Array< {
      __typename: "TMAppGroup",
      id: string,
      name: string,
      application:  Array< {
        __typename: "TMApplication",
        id: string,
        name: string,
        description: string | null,
        target: string,
        icon: string | null,
        linkType: LinkType,
        requiresElevatedPrivledges: boolean,
      } | null > | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTmApplicationSubscription = {
  onCreateTMApplication:  {
    __typename: "TMApplication",
    id: string,
    name: string,
    description: string | null,
    target: string,
    icon: string | null,
    linkType: LinkType,
    requiresElevatedPrivledges: boolean,
  } | null,
};

export type OnUpdateTmApplicationSubscription = {
  onUpdateTMApplication:  {
    __typename: "TMApplication",
    id: string,
    name: string,
    description: string | null,
    target: string,
    icon: string | null,
    linkType: LinkType,
    requiresElevatedPrivledges: boolean,
  } | null,
};

export type OnDeleteTmApplicationSubscription = {
  onDeleteTMApplication:  {
    __typename: "TMApplication",
    id: string,
    name: string,
    description: string | null,
    target: string,
    icon: string | null,
    linkType: LinkType,
    requiresElevatedPrivledges: boolean,
  } | null,
};

export type OnCreateTmAppGroupSubscription = {
  onCreateTMAppGroup:  {
    __typename: "TMAppGroup",
    id: string,
    name: string,
    application:  Array< {
      __typename: "TMApplication",
      id: string,
      name: string,
      description: string | null,
      target: string,
      icon: string | null,
      linkType: LinkType,
      requiresElevatedPrivledges: boolean,
    } | null > | null,
  } | null,
};

export type OnUpdateTmAppGroupSubscription = {
  onUpdateTMAppGroup:  {
    __typename: "TMAppGroup",
    id: string,
    name: string,
    application:  Array< {
      __typename: "TMApplication",
      id: string,
      name: string,
      description: string | null,
      target: string,
      icon: string | null,
      linkType: LinkType,
      requiresElevatedPrivledges: boolean,
    } | null > | null,
  } | null,
};

export type OnDeleteTmAppGroupSubscription = {
  onDeleteTMAppGroup:  {
    __typename: "TMAppGroup",
    id: string,
    name: string,
    application:  Array< {
      __typename: "TMApplication",
      id: string,
      name: string,
      description: string | null,
      target: string,
      icon: string | null,
      linkType: LinkType,
      requiresElevatedPrivledges: boolean,
    } | null > | null,
  } | null,
};
