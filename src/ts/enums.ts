export enum OnboardingSteps {
  NameStep = 1,
  WorkspaceStep,
  UseStep,
  CompletedStep
}

export enum InputKeys {
  FullName = "fullName",
  DisplayName = "displayName",
  WorkspaceName = "workspaceName",
  WorkspaceURL = "workspaceURL",
  ForUseBy = "forUseBy"
}

export enum ForUseBy {
  Self = "self",
  Team = "team"
}