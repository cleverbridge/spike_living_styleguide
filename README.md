# spike living styleguide
Spike to test out a living styleguide

# first steps
collected info about a living styleguide
- components can be delivered in one package
- components can be delivered in single packages
- component library can be developed individually
- existing component library can be used

# we discussed the different szenarios
- Client facing
    - list views of data
    - detail views for maintenance of data
- Customer facing
    - product / service selection
    - maintenance of personal data
    - maintenance of payment data
    - list view of invoices
- Ownership
    - how to handle this with the new systems
    
# possible solutions
- Client facing
    - use external existing component library
    - adapt cleverbridge design styleguide via theming 
    - no internal ownership of component library necessary 
    - only ownership of cleverbridge design styleguide needed
- Customer facing
    - create internal component library
    - decide individual if components based on existing ones or build completely
    - implement flexible theming and style possibilities
    - components provided with standard styles only
    - components are created from the team which need it first
    - final approval needed from 'design responsible'
    - until approval the component is only for the team available which build it
    - How CLS can work with it?
        - easy styling and theming via CSS
        - different example projects can be provided
- Ownership
    - in future a design team could be a good decision depending on the cleverbridge requirements
    - for now we would recommend 
        - one 'UI/UX person' of each team 
            - organized with other 'UI/UX persons'
            - share and provide knowledge of design and technical requirements
            - understanding of CLS needs required
        - and one 'design responsible' 
            - who provides the designs for client facing 
            - and approves the components of the customer facing components library
            - team owns component library 
- Versioning
    - component library versioned via GIT
    - components will be published to cgn nexus
    - usage of different versions just result in a design inconsistency
    - if breaking changes are necessary it has to be communicated through all teams in time
    - regulary only minor updates will be delivered

# Tooling
- Fabricator
    - summary of website sounds intersting
    - last deployment one year ago
    - no detailed information or example on how to use it in real szenarios
- Source JS
    - The most advanced tool for documenting, testing and managing UI components achieving productive team work
    - live editing in browser 
    - documentation of components
    - after 2h we gave up to get it running
- React Toolbox
    - uses react-themr packages for easy theming possibility 
    - based on material UI components library
    - at the moment a lot in development / beta 
    - no actual stable version at the moment available
    - after x hours we gave up to get it running
    - maybe interesting in future when next stable version is released
- React Styleguidist
    - nearly zero configuration setup
    - develop hot-relaoding components (js / css)
    - same technology stack as frontend (build with react)
    - easy customizable
    - live editing in browser 
    - documentation of components