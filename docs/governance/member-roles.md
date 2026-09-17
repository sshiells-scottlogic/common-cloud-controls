# Member Roles

Everyone is welcome to contribute through discussion, issues, and pull requests.

The following are roles and additional responsibilities that a person may recieve in the community.

| Role        | Responsibilities                                                                        | Requirements                                                                     | Defined by                                                           |
| ----------- | --------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Contributor | Contribute code, documentation, or other technical artifacts to the project             | Open to anyone                                                                   | Community participation                                              |
| Member      | Active contributor in the community, assist on community calls, give input on proposals | Sponsored by 2 maintainers after multiple contributions to the project           | GitHub FINOS `ccc-members` Group Member                              |
| Maintainer  | Review and merge contributions, and help maintain project assets and tooling            | Promoted from Contributor by a majority approval of the [TSC]                    | [CODEOWNERS] entry for specific files or directories                 |
| WG Lead     | Set direction and priorities for a working group (WG)                                   | Demonstrated responsibility and excellent technical judgement for the subproject | [CODEOWNERS] entry for all files or directories relating to the [WG] |

The TSC voting members are the Project's Maintainers. Role definitions and the current list of Maintainers are documented in the [CONTRIBUTING file](/.github/CONTRIBUTING.md).

## All New & Established Contributors

Anyone attending a CCC meeting, event, or contributing in any way will be expected to follow the [Linux Foundation Code of Conduct].

New contributors should be welcomed to the community by existing members, helped with pull request (PR)
workflow, and directed to relevant documentation and communication channels.

Established community members of **all roles** are expected to demonstrate technical and/or writing ability in their contributions,
adherence to the principles of the project, and familiarity with project organization
(roles, policies, procedures, conventions, etc). Role-specific expectations, responsibilities,
and eligibility requirements are enumerated below.

## Contributor

A Contributor is anyone in the technical community who contributes code, documentation, or other
technical artifacts to the project. Contributing is open to anyone who abides by the project's
policies and [Code of Conduct](#all-new--established-contributors); no prior appointment is required.

## Member

Members are continuously active contributors within the community. They can have issues or PRs
assigned to them and assist or scribe on community calls.

**Defined by:** GitHub FINOS `ccc-members` Group Member

### Eligibility Requirements

- Enabled two-factor authentication on their GitHub account
- Actively contributing to 1 or more [WG] in the past three (3) months.
- Have made **multiple contributions** to the project or community, enough to
  demonstrate an **ongoing and long-term commitment** to the project.
- Subscribed to the [community mail group]
- Applied, sponsored, and approved for member status.
  1. Open an pull request against the CCC repo [`participants.yaml`](/participants.yaml):
  - The PR description should contain a list or summary of your work on the project to date.
  1. Sponsoring maintainers mark the PR as ready to merge:
  - Must be sponsored by 2 maintainers from 2 employers.
  - Sponsors must have close project interactions with the prospective member
    (such as in PR review, proposal creation, coordinating on issues, etc.)
  1. Once your sponsors have approved, your request will be merged by the appropriate party within 14 days.

### Definition of Contributions

Contributions are meaningful engagements that advance the goals of the community.
These include, but are not limited to:

- Submission of impactful pull requests that are subsequently merged into the project's
  repositories.
- Additive participation in discussions on issues, pull requests, or community forums
  like mailing lists, Slack channels, or meetings.
- Contribution to design proposals or reviews.
- Assistance given in community management and organization, such as event planning or
  managing community tools and resources.

### Responsibilities and Privileges

- Responsive to issues and PRs assigned to them.
- Participate actively in at least one [WG].
- Scribe on community calls when necessary.
- Can have issues and PRs assigned to them.
- Can be invited to review and advise on PR approvals.
- Participation publicly documented in [`participants.yaml`](/participants.yaml).

## Maintainer

Maintainers review contributions from members and have a history of quality reviews
and authorship in a specific domain. In addition to reviewing pull requests, they help
maintain the project's community assets and tooling within their scope.

Maintainers are able to block or approve code contributions. Approval is focused on
holistic acceptance of a contribution including: backwards / forwards
compatibility, adhering to all conventions, subtle performance and
correctness issues, interactions with other parts of the system, and so forth.

**Defined by:** [CODEOWNERS] entry or GitHub Team for a specific scope.

Maintainers are the voting members of the [Technical Steering Committee (TSC)][TSC].

### Requirements

- History of quality reviews and contributions within a specific scope.
- Demonstrated ability to commit (merge) changes responsibly within that scope.

A Contributor becomes a Maintainer by a **majority approval of the [TSC]**. Once approved, the
Maintainer is added to the [CODEOWNERS] file (or the appropriate GitHub Team) for their scope and
becomes a voting member of the TSC.

A Maintainer may be removed by a **majority approval of the [TSC]**, following the process in the
[TSC Charter](steering/charter.md#no-confidence).

### Responsibilities and Privileges

- Provide thorough and practical reviews of contributions from other members.
- May approve and merge PRs from other members, or block PRs with requests for changes.
- Help maintain the project's community assets — repositories, documentation, and related resources — within their scope.
- Maintain project tooling and build/test infrastructure within their scope.
- Ensure contributions meet the project's conventions and quality standards.
- Adhere to the general responsibilities of a member.

## WG Lead

WG Leads set direction and priorities for a working group, demonstrating responsibility
and excellent technical judgement for the subproject.

**Defined by:** [CODEOWNERS] entry for all files or directories relating to the [WG] **and** GitHub Team for the respective working group.

### Requirements

- Demonstrated responsibility and excellent technical judgement for the [WG] topic as a
  _Maintainer_ for at least (3) months.
- Appointed by a [TSC] vote.
  - A [TSC] sponsor must create a PR to update [`participants.yaml`](/participants.yaml): with the new appointment.
  - Extending [CODEOWNERS] scope for an individual must follow the maintainer nomination process.
  - When appointment is confirmed, the sponsor must work with a repo admin to add appointee to the appropriate GitHub team(s)
- Adhere to relevant [community groups] guidelines, such as:
  - Follow the corresponding [WG] Charter
  - Ensure the proper execution of [WG] meetings
  - Represent the [WG] in relevant accountability meetings, or delegate an eligible representative

### Responsibilities and Privileges

- Set direction and priorities for a WG, ensuring consistent progress, and feed into project [roadmap] planning.
- Review and approve pull requests within the WG's scope.
- Own the WG's contribution to releases and the release process.
- Steward the WG's community assets and tooling.
- Present the [WG] status and progress to the rest of the community.
- Adhere to the general responsibilities of a _Maintainer_.

## Inactive Members

A core principle in maintaining a healthy community is encouraging active
participation. It is inevitable that people's focuses will change over time and
they are not expected to be actively contributing forever.

Inactive members are those who carry an aforementioned role or title within CCC
with **zero** qualifying contributions in the preceding 6 months.

Inactive members will be removed from their roles and will need to re-engage with the
community and go through the aforementioned processes again to regain their status.

Specific group charters may specify a shorter period for their roles.

---

[Linux Foundation Code of Conduct]: https://events.linuxfoundation.org/about/code-of-conduct/
[CODEOWNERS]: /.github/CODEOWNERS
[community mail group]: mailto:ccc-participants+subscribe@finos.org
[community groups]: ../governance/community-structure.md
[TSC]: ../governance/community-structure.md#steering-committee
[roadmap]: ../governance/steering/charter.md#roadmap-planning
[WG]: ../governance/community-structure.md#working-groups
