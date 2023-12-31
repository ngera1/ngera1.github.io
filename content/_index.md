---
date: "2022-10-24"
sections:
# - block: hero
#   content:
#     cta:
#       label: '**Get Started**'
#       url: https://wowchemy.com/templates/
#     cta_alt:
#       label: Ask a question
#       url: https://discord.gg/z8wNYzb
#     cta_note:
#       label: '<div style="text-shadow: none;"><a class="github-button" href="https://github.com/wowchemy/wowchemy-hugo-themes"
#         data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star">Star
#         Wowchemy Website Builder</a></div><div style="text-shadow: none;"><a class="github-button"
#         href="https://github.com/wowchemy/starter-hugo-academic" data-icon="octicon-star"
#         data-size="large" data-show-count="true" aria-label="Star">Star the Academic
#         template</a></div>'
#     image:
#       filename: hero-academic.png
#     text: |-
#       **Generated by Wowchemy - the FREE, Hugo-based open source website builder trusted by 500,000+ sites.**

#       **Easily build anything with blocks - no-code required!**

#       From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.

#       <!--Custom spacing-->
#       <div class="mb-3"></div>
#       <!--GitHub Button JS-->
#       <script async defer src="https://buttons.github.io/buttons.js"></script>
#     title: Hugo Academic Theme
#   design:
#     background:
#       gradient_end: '#1976d2'
#       gradient_start: '#004ba0'
#       text_color_light: true
- block: about.biography
  content:
    title: ~hello there🍃~
    username: admin
  id: about
# - block: features
#   content:
#     items:
#     - description: 90%
#       icon: r-project
#       icon_pack: fab
#       name: R
#     - description: 100%
#       icon: chart-line
#       icon_pack: fas
#       name: Statistics
#     - description: 10%
#       icon: camera-retro
#       icon_pack: fas
#       name: Photography
#     title: Parts of Me
- block: experience
  content:
    date_format: Jan 2006
    items:
    - company: Microsoft
      company_logo: microsoft
      company_url: ""
      date_end: ""
      date_start: "2021-06-07"
      description: |2-
        * Full-stack developer leading the revitalization of a web app crucial for connecting Windows builds to external partners (Dell, HP, etc.)
        * Tech Stack: Angular front-end, .NET back-end, SQL database and querying
        * Enabled cross-team connections with database management for more successful, higher-performance, lower latency back-end syncs, with over 2M+ API requests coming each day
      location: Seattle, WA
      title: Software Engineer
    - company: Cornell University
      company_logo: cornell
      company_url: ""
      date_end: "2021-05-05"
      date_start: "2020-05-05"
      description: |2-
        * Added secure querying operations verifying object trust relationships in A Language of Secure Objects (ALSO), with practical applications in banking transactions and blockchain security
        * Analyzed information flow control in the ALSO implementation of the game, A-MUD
      location: Ithaca, NY
      title: Undergrad Research - PL
    - company: Cornell University
      company_logo: cornell
      company_url: ""
      date_end: "2020-05-05"
      date_start: "2020-01-01"
      description: |2-
        * Worked as a teaching consultant for CS 2110 (Object-Oriented Programming and Data Structures)
        * Helped students on monthly CS projects and concepts through consulting hours
        * Managed grading of projects, assignments, and exams
      location: Ithaca, NY
      title: CS 2110 Undergrad TA
    - company: Cornell University
      company_logo: cornell
      company_url: ""
      date_end: "2019-08-08"
      date_start: "2019-05-05"
      description: |2-
        * Created an implemented a MATLAB script to analyze collagen fiber orientation around tumor spheroids using affine-filter-detectors, Fourier transforms, and Maximally Stable Extremal Regions (MSER)
      location: Ithaca, NY
      title: Undergrad Research - Computational Biology
    - company: University of Toledo
      company_logo: toledo
      company_url: ""
      date_end: "2018-08-08"
      date_start: "2017-02-02"
      description: |2-
        * Developed a mathematical algorithm to track dynamic subcellular signaling by computing intensity-thresholded fluorescence compactness
      location: Toledo, OH
      title: High-School Research - Optogenetics
    title: Experience
  design:
    columns: "2"
- block: accomplishments
  content:
    date_format: Jan 2006
    items:
    - certificate_url: https://www.credly.com/badges/9322d90c-33ba-4b59-9533-a6e756b98c31/linked_in_profile
      date_end: ""
      date_start: "2022-12-06"
      description: ""
      organization: The Microsoft Garage
      organization_url: https://www.credly.com/org/microsoftgarage
      title: Microsoft Global Hackathon 2022 Award Winner
      url: ""
    - certificate_url: https://globalmentorship.org/mentorship-program/
      date_end: ""
      date_start: "2022-03-02"
      description:
      organization: Global Mentorship Initiative
      organization_url: https://globalmentorship.org/
      title: GMI Business Mentor
      url:
    - certificate_url: https://www.credly.com/badges/be8cc625-c32b-4c93-b6b6-2660d286aff7/linked_in_profile
      date_end: ""
      date_start: "2021-12-09"
      description: "1st Place Winner of the 2021 Microsoft Global Hackathon, Hack for Industry Executive Challenge"
      organization: The Microsoft Garage
      organization_url: https://www.credly.com/org/microsoftgarage
      title: Microsoft Global Hackathon 2021 Challenge Winner
      url: ""
    subtitle: null
    title: Not&shy;able Certificates
  design:
    columns: "2"
- block: collection
  content:
    count: 5
    filters:
      author: ""
      category: ""
      exclude_featured: false
      exclude_future: false
      exclude_past: false
      folders:
      - post
      publication_type: ""
      tag: ""
    offset: 0
    order: desc
    subtitle: ""
    text: ""
    title: ~posts (actual ones coming soon!)~
  design:
    columns: "2"
    view: compact
  id: posts
# - block: portfolio
#   content:
#     buttons:
#     - name: All
#       tag: '*'
#     - name: Deep Learning
#       tag: Deep Learning
#     - name: Other
#       tag: Demo
#     default_button_index: 0
#     filters:
#       folders:
#       - project
#     title: Projects
#   design:
#     columns: "1"
#     flip_alt_rows: false
#     view: showcase
#   id: projects
# - block: markdown
#   content:
#     subtitle: ""
#     text: '{{< gallery album="demo" >}}'
#     title: Gallery
#   design:
#     columns: "1"
# - block: collection
#   content:
#     filters:
#       featured_only: true
#       folders:
#       - publication
#     title: Featured Publications
#   design:
#     columns: "2"
#     view: card
#   id: featured
# - block: collection
#   content:
#     filters:
#       exclude_featured: true
#       folders:
#       - publication
#     text: |-
#       {{% callout note %}}
#       Quickly discover relevant content by [filtering publications](./publication/).
#       {{% /callout %}}
#     title: Recent Publications
#   design:
#     columns: "2"
#     view: citation
# - block: collection
#   content:
#     filters:
#       folders:
#       - event
#     title: Recent & Upcoming Talks
#   design:
#     columns: "2"
#     view: compact
#   id: talks
# - block: tag_cloud
#   content:
#     title: Popular Topics
#   design:
#     columns: "2"
# - block: contact
#   content:
#     address:
#       city: Stanford
#       country: United States
#       country_code: US
#       postcode: "94305"
#       region: CA
#       street: 450 Serra Mall
#     appointment_url: https://calendly.com
#     autolink: true
#     contact_links:
#     # - icon: twitter
#     #   icon_pack: fab
#     #   link: https://twitter.com/Twitter
#     #   name: DM Me
#     # - icon: skype
#     #   icon_pack: fab
#     #   link: skype:echo123?call
#     #   name: Skype Me
#     # - icon: video
#     #   icon_pack: fas
#     #   link: https://zoom.com
#     #   name: Zoom Me
#     # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
#     email: nkg29@cornell.edu
#     form:
#       formspree:
#         id: null
#       netlify:
#         captcha: false
#       provider: netlify
#     # office_hours:
#     # - Monday 10:00 to 13:00
#     # - Wednesday 09:00 to 10:00
#     # phone: 888 888 88 88
#     subtitle: null
#     text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi diam, venenatis
#       ut magna et, vehicula efficitur enim.
#     title: Contact
#   design:
#     columns: "2"
#   id: contact
title: null
type: landing
---
