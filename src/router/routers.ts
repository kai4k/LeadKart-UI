import MainLayout from "../layout/main-layout/index.vue";
const routes = [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
            path:'/',
            redirect:'/e-commerce'
        },
        {
          path: "/e-commerce",
          name: "home",
          component: () =>
            import("@/view/dashboards/dashboard-page/e-commerce/index.vue"),
        },
        {
          path: "/dashboards-analytics",
          name: "dashboards-analytics",
          component: () =>
            import(
              "@/view/dashboards/dashboard-page/analytics/dashboards-analytics.vue"
            ),
        },
        {
          path: "/dashboards-hospital",
          name: "dashboards-hospital",
          component: () =>
            import("@/view/dashboards/dashboard-page/hospital/index.vue"),
        },
        {
          path: "/dashboards-file-manager",
          name: "dashboards-file-manager",
          component: () =>
            import("@/view/dashboards/dashboard-page/file-manager/index.vue"),
        },
        {
          path: "dashboards-crm",
          name: "dashboards-crm",
          component: () =>
            import("@/view/dashboards/dashboard-page/crm/index.vue"),
        },
        {
          path: "dashboard-email",
          name: "dashboard-email",
          component: () =>
            import("@/view/dashboards/dashboard-page/email/index.vue"),
        },
        {
          path: "dashboards-projects",
          name: "dashboards-projects",
          component: () =>
            import("@/view/dashboards/dashboard-page/project/index.vue"),
        },
        {
          path: "dashboards-school",
          name: "dashboards-school",
          component: () =>
            import("@/view/dashboards/dashboard-page/school/index.vue"),
        },
        {
          path: "dashboard-music",
          name: "dashboard-music",
          component: () =>
            import("@/view/dashboards/dashboard-page/music/index.vue"),
        },
  
        // app-layout-routing
        {
          path: "apps-chat-default",
          name: "apps-chat-default",
          component: () =>
            import("@/view/apps/apps-chat/apps-chat-default/index.vue"),
        },
        {
          path: "apps-chat-group",
          name: "apps-chat-group",
          component: () =>
            import("@/view/apps/apps-chat/apps-chat-group/index.vue"),
        },
        {
          path: "apps-chat-group-video",
          name: "apps-chat-group-video",
          component: () =>
            import("@/view/apps/apps-chat/apps-chat-group-video/index.vue"),
        },
        {
          path: "apps-calendar-default",
          name: "apps-calendar-default",
          component: () =>
            import("@/view/apps/apps-calendar/apps-calendar-default/index.vue"),
        },
        {
          path: "apps-calendar-weeknumber",
          name: "apps-calendar-weeknumber",
          component: () =>
            import(
              "@/view/apps/apps-calendar/apps-calendar-weeknumber/index.vue"
            ),
        },
        {
          path: "apps-calendar-localize",
          name: "apps-calendar-localize",
          component: () =>
            import("@/view/apps/apps-calendar/apps-calendar-localize/index.vue"),
        },
        {
          path: "apps-calendar-dayview",
          name: "apps-calendar-dayview",
          component: () =>
            import("@/view/apps/apps-calendar/apps-calendar-dayview.vue"),
        },
        {
          path: "apps-calendar-timegrid",
          name: "apps-calendar-timegrid",
          component: () =>
            import("@/view/apps/apps-calendar/apps-calendar-timegrid.vue"),
        },
        {
          path: "apps-calendar-multi-month-grid",
          name: "apps-calendar-multi-month-grid",
          component: () =>
            import(
              "@/view/apps/apps-calendar/apps-calendar-multi-month-grid.vue"
            ),
        },
        {
          path: "apps-calendar-listview",
          name: "apps-calendar-listview",
          component: () =>
            import("@/view/apps/apps-calendar/apps-calendar-listview.vue"),
        },
        {
          path: "apps-calendar-timeline",
          name: "apps-calendar-timeline",
          component: () =>
            import("@/view/apps/apps-calendar/apps-calendar-timeline.vue"),
        },
        {
          path: "apps-calendar-date-clicking",
          name: "apps-calendar-date-clicking",
          component: () =>
            import("@/view/apps/apps-calendar/apps-calendar-date-clicking.vue"),
        },
        {
          path: "apps-calendar-date-nav-link",
          name: "apps-calendar-date-nav-link",
          component: () =>
            import("@/view/apps/apps-calendar/apps-calendar-date-nav-link.vue"),
        },
        {
          path: "apps-calendar-multi-month-stack",
          name: "apps-calendar-multi-month-stack",
          component: () =>
            import(
              "@/view/apps/apps-calendar/apps-calendar-multi-month-stack.vue"
            ),
        },
        {
          path: "apps-mailbox",
          name: "apps-mailbox",
          component: () =>
            import("@/view/apps/apps-email/apps-mailbox/index.vue"),
        },
        {
          path: "apps-email-templates-welcome",
          name: "apps-email-templates-welcome",
          component: () =>
            import(
              "@/view/apps/apps-email/mail-templates/apps-email-templates-welcome.vue"
            ),
        },
        {
          path: "apps-email-templates-newsletter",
          name: "apps-email-templates-newsletter",
          component: () =>
            import(
              "@/view/apps/apps-email/mail-templates/apps-email-templates-newsletter.vue"
            ),
        },
        {
          path: "apps-chat-group-video",
          name: "apps-chat-group-video",
          component: () =>
            import("@/view/apps/apps-chat/apps-chat-group-video/index.vue"),
        },
        {
          path: "apps-chat-group-video",
          name: "apps-chat-group-video",
          component: () =>
            import("@/view/apps/apps-chat/apps-chat-group-video/index.vue"),
        },
        // app-e-commerce-layout-routing
        {
          path: "apps-ecommerce-products-list",
          name: "apps-ecommerce-products-list",
          component: () =>
            import("@/view/apps/app-ecommerce/products/list-view/index.vue"),
        },
        {
          path: "apps-ecommerce-products-grid",
          name: "apps-ecommerce-products-grid",
          component: () =>
            import("@/view/apps/app-ecommerce/products/grid-view/index.vue"),
        },
        {
          path: "apps-ecommerce-create-products",
          name: "apps-ecommerce-create-products",
          component: () =>
            import("@/view/apps/app-ecommerce/products/add-new/index.vue"),
        },
        {
          path: "apps-ecommerce-product-overview",
          name: "apps-ecommerce-product-overview",
          component: () =>
            import("@/view/apps/app-ecommerce/products/overview/index.vue"),
        },
        {
          path: "apps-ecommerce-category",
          name: "apps-ecommerce-category",
          component: () =>
            import("@/view/apps/app-ecommerce/products/category-list/index.vue"),
        },
        {
          path: "apps-ecommerce-orders-list",
          name: "apps-ecommerce-orders-list",
          component: () =>
            import("@/view/apps/app-ecommerce/Orders/list-view/index.vue"),
        },
        {
          path: "apps-ecommerce-orders-overview",
          name: "apps-ecommerce-orders-overview",
          component: () =>
            import("@/view/apps/app-ecommerce/Orders/overview/index.vue"),
        },
        {
          path: "apps-ecommerce-orders-track",
          name: "apps-ecommerce-orders-track",
          component: () =>
            import("@/view/apps/app-ecommerce/Orders/tranck/index.vue"),
        },
        {
          path: "apps-ecommerce-customer-list",
          name: "apps-ecommerce-customer-list",
          component: () =>
            import("@/view/apps/app-ecommerce/customers/live-view/index.vue"),
        },
        {
          path: "apps-ecommerce-customer-user",
          name: "apps-ecommerce-customer-user",
          component: () =>
            import("@/view/apps/app-ecommerce/customers/overview/index.vue"),
        },
        {
          path: "apps-ecommerce-shop-cart",
          name: "apps-ecommerce-shop-cart",
          component: () =>
            import("@/view/apps/app-ecommerce/shop-cart/index.vue"),
        },
        {
          path: "apps-ecommerce-checkout",
          name: "apps-ecommerce-checkout",
          component: () => import("@/view/apps/app-ecommerce/checkout/index.vue"),
        },
        {
          path: "apps-ecommerce-wishlist",
          name: "apps-ecommerce-wishlist",
          component: () =>
            import("@/view/apps/app-ecommerce/wish-list/index.vue"),
        },
        {
          path: "apps-ecommerce-payment",
          name: "apps-ecommerce-payment",
          component: () => import("@/view/apps/app-ecommerce/payment/index.vue"),
        },
        {
          path: "apps-ecommerce-manage-reviews",
          name: "apps-ecommerce-manage-reviews",
          component: () =>
            import("@/view/apps/app-ecommerce/manage-reviews/index.vue"),
        },
        {
          path: "apps-file-manager",
          name: "apps-file-manager",
          component: () => import("@/view/apps/file-manager/index.vue"),
        },
        {
          path: "apps-projects-list",
          name: "apps-projects-list",
          component: () =>
            import("@/view/apps/apps-projects/list-view/index.vue"),
        },
        {
          path: "apps-projects-grid",
          name: "apps-projects-grid",
          component: () =>
            import("@/view/apps/apps-projects/grid-view/index.vue"),
        },
        {
          path: "",
          name: "",
          component: () =>
            import("@/view/apps/apps-projects/project-activity/index.vue"),
          children: [
            {
              path: "apps-projects-overview",
              name: "apps-projects-overview",
              component: () =>
                import("@/view/apps/apps-projects/overview/index.vue"),
            },
            {
              path: "apps-projects-roadmap",
              name: "apps-projects-roadmap",
              component: () =>
                import("@/view/apps/apps-projects/roadmap/index.vue"),
            },
            {
              path: "apps-projects-task",
              name: "apps-projects-task",
              component: () => import("@/view/apps/apps-projects/task/index.vue"),
            },
            {
              path: "apps-projects-files",
              name: "apps-projects-files",
              component: () =>
                import("@/view/apps/apps-projects/files/index.vue"),
            },
            {
              path: "apps-projects-users",
              name: "apps-projects-users",
              component: () =>
                import("@/view/apps/apps-projects/users/index.vue"),
            },
          ],
        },
        // App CRM
        {
          path: "",
          name: "",
          children: [
            {
              path: "apps-crm-lead",
              name: "apps-crm-lead",
              component: () => import("@/view/apps/apps-crm/lead/index.vue"),
            },
            {
              path: "apps-crm-contact",
              name: "apps-crm-contact",
              component: () => import("@/view/apps/apps-crm/contact/index.vue"),
            },
            {
              path: "apps-crm-deal",
              name: "apps-crm-deal",
              component: () => import("@/view/apps/apps-crm/deal/index.vue"),
            },
          ],
        },
        // App Event
        {
          path: "",
          name: "",
          children: [
            {
              path: "apps-events-list",
              name: "apps-events-list",
              component: () =>
                import("@/view/apps/apps-events/list-view/index.vue"),
            },
            {
              path: "apps-events-grid",
              name: "apps-events-grid",
              component: () =>
                import("@/view/apps/apps-events/grid-view/index.vue"),
            },
            {
              path: "apps-event-overview",
              name: "apps-event-overview",
              component: () =>
                import("@/view/apps/apps-events/overview/index.vue"),
            },
          ],
        },
        // App Hospital & School
        {
          path: "",
          children: [
            {
              path: "apps-hospital-patients-lists",
              name: "apps-hospital-patients-lists",
              component: () =>
                import("@/view/apps/apps-hospitals/patients/list-view/index.vue"),
            },
            {
              path: "apps-hospital-patients-create",
              name: "apps-hospital-patients-create",
              component: () =>
                import(
                  "@/view/apps/apps-hospitals/patients/add-patients/index.vue"
                ),
            },
            {
              path: "apps-hospital-patients-overview",
              name: "apps-hospital-patients-overview",
              component: () =>
                import("@/view/apps/apps-hospitals/patients/overview/index.vue"),
            },
            {
              path: "apps-hospital-staff-lists",
              name: "apps-hospital-staff-lists",
              component: () =>
                import("@/view/apps/apps-hospitals/staff/list-view/index.vue"),
            },
            {
              path: "apps-hospital-staff-leaves",
              name: "apps-hospital-staff-leaves",
              component: () =>
                import("@/view/apps/apps-hospitals/staff/leaves/index.vue"),
            },
            {
              path: "apps-hospital-staff-leave-add",
              name: "apps-hospital-staff-leave-add",
              component: () =>
                import("@/view/apps/apps-hospitals/staff/add-leave/index.vue"),
            },
            {
              path: "apps-hospital-staff-holidays",
              name: "apps-hospital-staff-holidays",
              component: () =>
                import("@/view/apps/apps-hospitals/staff/holidays/index.vue"),
            },
            {
              path: "apps-hospital-staff-attendance",
              name: "apps-hospital-staff-attendance",
              component: () =>
                import("@/view/apps/apps-hospitals/staff/attendance/index.vue"),
            },
            {
              path: "apps-hospital-appointments-lists",
              name: "apps-hospital-appointments-lists",
              component: () =>
                import(
                  "@/view/apps/apps-hospitals/appointments/list-view/index.vue"
                ),
            },
            {
              path: "apps-hospital-appointments-book",
              name: "apps-hospital-appointments-book",
              component: () =>
                import(
                  "@/view/apps/apps-hospitals/appointments/book-appointment/index.vue"
                ),
            },
            {
              path: "apps-hospital-doctor-schedule",
              name: "apps-hospital-doctor-schedule",
              component: () =>
                import("@/view/apps/apps-hospitals/doctor-schedule/index.vue"),
            },
            {
              path: "apps-hospital-departments",
              name: "apps-hospital-departments",
              component: () =>
                import("@/view/apps/apps-hospitals/departments/index.vue"),
            },
            {
              path: "apps-hospital-payroll-employee-salary",
              name: "apps-hospital-payroll-employee-salary",
              component: () =>
                import(
                  "@/view/apps/apps-hospitals/payroll/employee-salary/index.vue"
                ),
            },
            {
              path: "apps-hospital-payroll-payslip",
              name: "apps-hospital-payroll-payslip",
              component: () =>
                import("@/view/apps/apps-hospitals/payroll/payslip/index.vue"),
            },
            {
              path: "apps-school-students-list",
              name: "apps-school-students-list",
              component: () =>
                import("@/view/apps/apps-school/students/all-students/index.vue"),
            },
            {
              path: "apps-school-students-overview",
              name: "apps-school-students-overview",
              component: () =>
                import("@/view/apps/apps-school/students/overview/index.vue"),
            },
            {
              path: "apps-school-students-admission",
              name: "apps-school-students-admission",
              component: () =>
                import(
                  "@/view/apps/apps-school/students/admission-form/index.vue"
                ),
            },
            {
              path: "apps-school-teachers-list",
              name: "apps-school-teachers-list",
              component: () =>
                import("@/view/apps/apps-school/teachers/all-teachers/index.vue"),
            },
            {
              path: "apps-school-teachers-overview",
              name: "apps-school-teachers-overview",
              component: () =>
                import("@/view/apps/apps-school/teachers/overview/index.vue"),
            },
            {
              path: "apps-school-teachers-payroll",
              name: "apps-school-teachers-payroll",
              component: () =>
                import("@/view/apps/apps-school/teachers/payroll/index.vue"),
            },
            {
              path: "apps-school-parents",
              name: "apps-school-parents",
              component: () =>
                import("@/view/apps/apps-school/parents/index.vue"),
            },
            {
              path: "apps-school-library-book",
              name: "apps-school-library-book",
              component: () =>
                import("@/view/apps/apps-school/library/index.vue"),
            },
            {
              path: "apps-school-attendances-students",
              name: "apps-school-attendances-students",
              component: () =>
                import("@/view/apps/apps-school/attendance/index.vue"),
            },
            {
              path: "apps-school-exam-schedule",
              name: "apps-school-exam-schedule",
              component: () =>
                import("@/view/apps/apps-school/exam/schedule/index.vue"),
            },
            {
              path: "apps-school-exam-question",
              name: "apps-school-exam-question",
              component: () =>
                import("@/view/apps/apps-school/exam/exam-question/index.vue"),
            },
          ],
        },
        // App Invoice
        {
          path: "",
          children: [
            {
              path: "apps-invoice-list",
              name: "apps-invoice-list",
              component: () =>
                import("@/view/apps/apps-invoice/list-view/index.vue"),
            },
            {
              path: "apps-invoice-grid",
              name: "apps-invoice-grid",
              component: () =>
                import("@/view/apps/apps-invoice/grid-view/index.vue"),
            },
            {
              path: "apps-invoice-create",
              name: "apps-invoice-create",
              component: () =>
                import("@/view/apps/apps-invoice/add-new/index.vue"),
            },
            {
              path: "apps-invoice-overview-1",
              name: "apps-invoice-overview-1",
              component: () =>
                import("@/view/apps/apps-invoice/overview-1/index.vue"),
            },
            {
              path: "apps-invoice-overview-2",
              name: "apps-invoice-overview-21",
              component: () =>
                import("@/view/apps/apps-invoice/overview-2/index.vue"),
            },
          ],
        },
        // ui-layout-routing
        {
          path: "ui-alerts",
          name: "ui-alerts",
          component: () => import("@/view/Components/ui-elements/Alerts.vue"),
        },
        {
          path: "ui-badge",
          name: "ui-badge",
          component: () => import("@/view/Components/ui-elements/ui-badge.vue"),
        },
        {
          path: "ui-breadcrumb",
          name: "ui-breadcrumb",
          component: () =>
            import("@/view/Components/ui-elements/ui-breadcrumb.vue"),
        },
        {
          path: "ui-buttons-group",
          name: "ui-buttons-group",
          component: () =>
            import("@/view/Components/ui-elements/ui-buttons-group.vue"),
        },
        {
          path: "ui-buttons",
          name: "ui-buttons",
          component: () => import("@/view/Components/ui-elements/ui-buttons.vue"),
        },
        {
          path: "ui-button-navigation",
          name: "ui-button-navigation",
          component: () =>
            import("@/view/Components/ui-elements/ui-button-navigation.vue"),
        },
        {
          path: "ui-dropdown",
          name: "ui-dropdown",
          component: () =>
            import("@/view/Components/ui-elements/ui-dropdown.vue"),
        },
        {
          path: "ui-loader",
          name: "ui-loader",
          component: () => import("@/view/Components/ui-elements/ui-loader.vue"),
        },
        {
          path: "ui-accordion",
          name: "ui-accordion",
          component: () =>
            import("@/view/Components/ui-elements/ui-accordion.vue"),
        },
        {
          path: "ui-modal",
          name: "ui-modal",
          component: () => import("@/view/Components/ui-elements/ui-modal.vue"),
        },
        {
          path: "ui-links",
          name: "ui-links",
          component: () => import("@/view/Components/ui-elements/ui-links.vue"),
        },
        {
          path: "ui-tabs",
          name: "ui-tabs",
          component: () => import("@/view/Components/ui-elements/ui-tabs.vue"),
        },
        {
          path: "ui-drawer",
          name: "ui-drawer",
          component: () => import("@/view/Components/ui-elements/ui-drawer.vue"),
        },
        {
          path: "ui-pagination",
          name: "ui-pagination",
          component: () =>
            import("@/view/Components/ui-elements/ui-pagination.vue"),
        },
        {
          path: "ui-progress-bar",
          name: "ui-progress-bar",
          component: () =>
            import("@/view/Components/ui-elements/ui-progress-bar.vue"),
        },
        {
          path: "ui-tooltips",
          name: "ui-tooltips",
          component: () =>
            import("@/view/Components/ui-elements/ui-tooltips.vue"),
        },
        {
          path: "ui-cards",
          name: "ui-cards",
          component: () => import("@/view/Components/ui-elements/ui-cards.vue"),
        },
        {
          path: "ui-timeline",
          name: "ui-timeline",
          component: () =>
            import("@/view/Components/ui-elements/ui-timeline.vue"),
        },
        {
          path: "ui-notification",
          name: "ui-notification",
          component: () =>
            import("@/view/Components/ui-elements/ui-notification.vue"),
        },
        {
          path: "ui-list-group",
          name: "ui-list-group",
          component: () =>
            import("@/view/Components/ui-elements/ui-list-group.vue"),
        },
        {
          path: "ui-cookie",
          name: "ui-cookie",
          component: () => import("@/view/Components/ui-elements/ui-cookie.vue"),
        },
        {
          path: "ui-gallery",
          name: "ui-gallery",
          component: () => import("@/view/Components/ui-elements/ui-gallery.vue"),
        },
        {
          path: "ui-video",
          name: "ui-video",
          component: () => import("@/view/Components/ui-elements/ui-video.vue"),
        },
        {
          path: "ui-colors",
          name: "ui-colors",
          component: () => import("@/view/Components/ui-elements/ui-colors.vue"),
        },
        {
          path: "ui-typography",
          name: "ui-typography",
          component: () =>
            import("@/view/Components/ui-elements/ui-typography.vue"),
        },
        {
          path: "ui-advanced-animation",
          name: "ui-advanced-animation",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-animation.vue"),
        },
        {
          path: "ui-advanced-simplebar",
          name: "ui-advanced-simplebar",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-simplebar.vue"),
        },
        {
          path: "ui-advanced-swiper",
          name: "ui-advanced-swiper",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-swiper.vue"),
        },
        {
          path: "ui-advanced-3d-effect",
          name: "ui-advanced-3d-effect",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-3d-effect.vue"),
        },
        {
          path: "ui-advanced-word-counter",
          name: "ui-advanced-word-counter",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-word-counter.vue"),
        },
        {
          path: "ui-advanced-bot",
          name: " ",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-bot.vue"),
        },
        {
          path: "ui-advanced-image-annotation",
          name: "ui-advanced-image-annotation",
          component: () =>
            import(
              "@/view/Components/ui-advanced/ui-advanced-image-annotation.vue"
            ),
        },
        {
          path: "ui-advanced-tree",
          name: "ui-advanced-tree",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-tree.vue"),
        },
        {
          path: "ui-advanced-highlight",
          name: "ui-advanced-highlight",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-highlight.vue"),
        },
        {
          path: "ui-advanced-mask",
          name: "ui-advanced-mask",
          component: () =>
            import("@/view/Components/ui-advanced/ui-advanced-mask.vue"),
        },
        {
          path: "icons-lucide",
          name: "icons-lucide",
          component: () => import("@/view/Components/icons/icons-lucide.vue"),
        },
        {
          path: "icons-remix",
          name: "icons-remix",
          component: () => import("@/view/Components/icons/icons-remix.vue"),
        },
        {
          path: "icons-heroicons",
          name: "icons-heroicons",
          component: () => import("@/view/Components/icons/icons-heroicons.vue"),
        },
        {
          path: "icons-boxicon",
          name: "icons-boxicon",
          component: () => import("@/view/Components/icons/icons-boxicon.vue"),
        },
        {
          path: "icons-line-awesome",
          name: "icons-line-awesome",
          component: () =>
            import("@/view/Components/icons/icons-line-awesome.vue"),
        },
        // Pages : pages
        {
          path: "",
          name: "",
          children: [
            {
              path: "pages-starter",
              name: "pages-starter",
              component: () => import("@/view/Pages/pages/blank.vue"),
            },
            {
              path: "pages-account-settings",
              name: "pages-account-settings",
              component: () => import("@/view/Pages/pages/account/account.vue"),
            },
            {
              path: "pages-account-security",
              name: "pages-account-security",
              component: () => import("@/view/Pages/pages/account/security.vue"),
            },
            {
              path: "pages-account-billing-plan",
              name: "pages-account-billing-plan",
              component: () =>
                import("@/view/Pages/pages/account/billing-and-plans/index.vue"),
            },
            {
              path: "pages-account-notification",
              name: "pages-account-notification",
              component: () =>
                import("@/view/Pages/pages/account/notification.vue"),
            },
            {
              path: "pages-account-statements",
              name: "pages-account-statements",
              component: () =>
                import("@/view/Pages/pages/account/statements/index.vue"),
            },
            {
              path: "pages-account-logs",
              name: "pages-account-logs",
              component: () =>
                import("@/view/Pages/pages/account/pages-log-devices/index.vue"),
            },
            {
              path: "pages-user",
              name: "pages-user",
              component: () =>
                import("@/view/apps/app-ecommerce/customers/overview/index.vue"),
            },
            {
              path: "pages-user-activity",
              name: "pages-user-activity",
              component: () =>
                import("@/view/Pages/pages/user-profile/activity/index.vue"),
            },
            {
              path: "pages-user-followers",
              name: "pages-user-followers",
              component: () =>
                import("@/view/Pages/pages/user-profile/followers/index.vue"),
            },
            {
              path: "pages-user-documents",
              name: "pages-user-documents",
              component: () =>
                import("@/view/Pages/pages/user-profile/documents/index.vue"),
            },
            {
              path: "pages-user-notes",
              name: "pages-user-notes",
              component: () =>
                import("@/view/Pages/pages/user-profile/notes/index.vue"),
            },
            {
              path: "pages-user-projects",
              name: "pages-user-projects",
              component: () =>
                import("@/view/Pages/pages/user-profile/projects/index.vue"),
            },
            {
              path: "pages-pricing",
              name: "pages-pricing",
              component: () =>
                import("@/view/Pages/pages/pricing/user/index.vue"),
            },
            {
              path: "pages-pricing-admin",
              name: "pages-pricing-admin",
              component: () =>
                import("@/view/Pages/pages/pricing/admin/index.vue"),
            },
            {
              path: "pages-faq",
              name: "pages-faq",
              component: () => import("@/view/Pages/pages/FAQ/index.vue"),
            },
            {
              path: "pages-licenses",
              name: "pages-licenses",
              component: () => import("@/view/Pages/pages/pages-licenses.vue"),
            },
            {
              path: "pages-privacy-policy",
              name: "pages-privacy-policy",
              component: () =>
                import("@/view/Pages/pages/pages-privacy-policy.vue"),
            },
            {
              path: "pages-help-center",
              name: "pages-help-center",
              component: () => import("@/view/Pages/pages/help-center/index.vue"),
            },
            {
              path: "widgets-cards",
              name: "widgets-cards",
              component: () => import("@/view/Pages/widgets/cards/index.vue"),
            },
            {
              path: "widgets-banners",
              name: "widgets-banners",
              component: () => import("@/view/Pages/widgets/banners/index.vue"),
            },
            {
              path: "widgets-charts",
              name: "widgets-charts",
              component: () => import("@/view/Pages/widgets/charts/index.vue"),
            },
            {
              path: "widgets-data",
              name: "widgets-data",
              component: () => import("@/view/Pages/widgets/data/index.vue"),
            },
          ],
        },
        // Forms & Tables
        {
          path: "",
          children: [
            {
              path: "form-basic-input",
              name: "form-basic-input",
              component: () =>
                import("@/view/forms&tables/forms/basic-input.vue"),
            },
            {
              path: "form-input-group",
              name: "form-input-group",
              component: () =>
                import("@/view/forms&tables/forms/input-group.vue"),
            },
            {
              path: "form-file-input",
              name: "form-file-input",
              component: () =>
                import("@/view/forms&tables/forms/form-file-input.vue"),
            },
            {
              path: "form-pickers",
              name: "form-pickers",
              component: () =>
                import("@/view/forms&tables/forms/form-pickers.vue"),
            },
            {
              path: "form-range",
              name: "form-range",
              component: () => import("@/view/forms&tables/forms/form-range.vue"),
            },
            {
              path: "form-switches",
              name: "form-switches",
              component: () =>
                import("@/view/forms&tables/forms/form-switches.vue"),
            },
            {
              path: "form-checkbox-radio",
              name: "form-checkbox-radio",
              component: () =>
                import("@/view/forms&tables/forms/form-checkbox-radio.vue"),
            },
            {
              path: "form-input-spin",
              name: "form-input-spin",
              component: () =>
                import("@/view/forms&tables/forms/form-input-spin.vue"),
            },
            {
              path: "form-recaptcha",
              name: "form-recaptcha",
              component: () =>
                import("@/view/forms&tables/forms/form-recaptcha.vue"),
            },
            {
              path: "form-autosize",
              name: "form-autosize",
              component: () =>
                import("@/view/forms&tables/forms/form-autosize.vue"),
            },
            {
              path: "form-editors",
              name: "form-editors",
              component: () =>
                import("@/view/forms&tables/editors/form-editors.vue"),
            },
            {
              path: "form-clipboard",
              name: "form-clipboard",
              component: () => import("@/view/forms&tables/form-clipboard.vue"),
            },
            {
              path: "form-wizard-basic",
              name: "form-wizard-basic",
              component: () =>
                import("@/view/forms&tables/form-wizard-basic.vue"),
            },
            {
              path: "table-base",
              name: "table-base",
              component: () =>
                import("@/view/forms&tables/tables/base-table/index.vue"),
            },
            {
              path: "table-datatables-basic",
              name: "table-datat1ables-basic",
              component: () =>
                import(
                  "@/view/forms&tables/tables/data-tables/base-table/index.vue"
                ),
            },
            {
              path: "table-datatables-bordered",
              name: "table-datatables-bordered",
              component: () =>
                import(
                  "@/view/forms&tables/tables/data-tables/table-datatables-bordered.vue"
                ),
            },
            {
              path: "table-datatables-stripe",
              name: "table-datatables-stripe",
              component: () =>
                import(
                  "@/view/forms&tables/tables/data-tables/table-datatables-stripe.vue"
                ),
            },
            {
              path: "table-datatables-hover",
              name: "table-datatables-hover",
              component: () =>
                import(
                  "@/view/forms&tables/tables/data-tables/table-datatables-hover.vue"
                ),
            },
            {
              path: "table-datatables-row-grouping",
              name: "table-datatables-row-grouping",
              component: () =>
                import(
                  "@/view/forms&tables/tables/data-tables/table-datatables-row-grouping.vue"
                ),
            },
            {
              path: "table-datatables-enable-disable",
              name: "table-datatables-enable-disable",
              component: () =>
                import(
                  "@/view/forms&tables/tables/data-tables/table-datatables-enable-disable.vue"
                ),
            },
            {
              path: "apexchart-area",
              name: "apexchart-area",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-area/index.vue"),
            },
            {
              path: "apexchart-bar",
              name: "apexchart-bar",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-bar/index.vue"),
            },
            {
              path: "apexchart-box-whisker",
              name: "apexchart-box-whisker",
              component: () =>
                import("@/view/chart&maps/apexcharts/box-whisker/index.vue"),
            },
            {
              path: "apexchart-bubble",
              name: "apexchart-bubble",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-bubble/index.vue"),
            },
            {
              path: "apexchart-candlestick",
              name: "apexchart-candlestick",
              component: () =>
                import(
                  "@/view/chart&maps/apexcharts/apexchart-candlestick/index.vue"
                ),
            },
            {
              path: "apexchart-column",
              name: "apexchart-column",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-column/index.vue"),
            },
            {
              path: "apexchart-funnel",
              name: "apexchart-funnel",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-funnel/index.vue"),
            },
            {
              path: "apexchart-heatmap",
              name: "apexchart-heatmap",
              component: () =>
                import(
                  "@/view/chart&maps/apexcharts/apexchart-heatmap/index.vue"
                ),
            },
            {
              path: "apexchart-line",
              name: "apexchart-line",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-line/index.vue"),
            },
            {
              path: "apexchart-mixed",
              name: "apexchart-mixed",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-mixed/index.vue"),
            },
            {
              path: "apexchart-pie",
              name: "apexchart-pie",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-pie/index.vue"),
            },
            {
              path: "apexchart-polar-area",
              name: "apexchart-polar-area",
              component: () =>
                import(
                  "@/view/chart&maps/apexcharts/apexchart-polar-area/index.vue"
                ),
            },
            {
              path: "apexchart-radar",
              name: "apexchart-radar",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-radar/index.vue"),
            },
            {
              path: "apexchart-radialbar",
              name: "apexchart-radialbar",
              component: () =>
                import(
                  "@/view/chart&maps/apexcharts/apexchart-radialbar/index.vue"
                ),
            },
            {
              path: "apexchart-range-area",
              name: "apexchart-range-area",
              component: () =>
                import(
                  "@/view/chart&maps/apexcharts/apexchart-range-area/index.vue"
                ),
            },
            {
              path: "apexchart-scatter",
              name: "apexchart-scatter",
              component: () =>
                import(
                  "@/view/chart&maps/apexcharts/apexchart-scatter/index.vue"
                ),
            },
            {
              path: "apexchart-slope",
              name: "apexchart-slope",
              component: () =>
                import("@/view/chart&maps/apexcharts/apexchart-slope/index.vue"),
            },
            {
              path: "apexchart-timeline",
              name: "apexchart-timeline",
              component: () =>
                import(
                  "@/view/chart&maps/apexcharts/apexchart-timeline/index.vue"
                ),
            },
            {
              path: "apexchart-treemap",
              name: "apexchart-treemap",
              component: () =>
                import(
                  "@/view/chart&maps/apexcharts/apexchart-treemap/index.vue"
                ),
            },
            {
              path: "apextree-top-bottom",
              name: "apextree-top-bottom",
              component: () =>
                import("@/view/chart&maps/apextree/apextree-top-bottom.vue"),
            },
            {
              path: "apextree-bottom-top",
              name: "apextree-bottom-top",
              component: () =>
                import("@/view/chart&maps/apextree/apextree-bottom-top.vue"),
            },
            {
              path: "apextree-left-right",
              name: "apextree-left-right",
              component: () =>
                import("@/view/chart&maps/apextree/apextree-left-right.vue"),
            },
            {
              path: "apextree-right-left",
              name: "apextree-right-left",
              component: () =>
                import("@/view/chart&maps/apextree/apextree-right-left.vue"),
            },
            {
              path: "apextree-collapse-expand",
              name: "apextree-collapse-expand",
              component: () =>
                import("@/view/chart&maps/apextree/apextree-collapse-expand.vue"),
            },
            {
              path: "charts-apexsankey",
              name: "charts-apexsankey",
              component: () =>
                import("@/view/chart&maps/charts-apexsankey/index.vue"),
            },
            {
              path: "echart-bar",
              name: "echart-bar",
              component: () =>
                import("@/view/chart&maps/echarts/echart-bar/index.vue"),
            },
            {
              path: "echart-line",
              name: "echart-line",
              component: () =>
                import("@/view/chart&maps/echarts/echart-line/index.vue"),
            },
            {
              path: "echart-pie",
              name: "echart-pie",
              component: () =>
                import("@/view/chart&maps/echarts/echart-pie/index.vue"),
            },
            {
              path: "maps-google",
              name: "maps-google",
              component: () =>
                import("@/view/chart&maps/maps/google-maps/index.vue"),
            },
            {
              path: "maps-vector",
              name: "maps-vector",
              component: () => import("@/view/chart&maps/maps/victor/index.vue"),
            },
          ],
        },
      ],
    },
    // pages
    {
      // Authentications
      path: "",
      children: [
        {
          path: "auth-signin-basic",
          name: "auth-signin-basic",
          component: () =>
            import("@/view/Pages/Authentication/sign-in/auth-signin-basic.vue"),
        },
        {
          path: "auth-signin-modern",
          name: "auth-signin-modern",
          component: () =>
            import("@/view/Pages/Authentication/sign-in/auth-signin-modern.vue"),
        },
        {
          path: "auth-signin-creative",
          name: "auth-signin-creative",
          component: () =>
            import(
              "@/view/Pages/Authentication/sign-in/auth-signin-creative.vue"
            ),
        },
        {
          path: "auth-signup-basic",
          name: "auth-signup-basic",
          component: () =>
            import("@/view/Pages/Authentication/sign-up/auth-signup-basic.vue"),
        },
        {
          path: "auth-signup-modern",
          name: "auth-signup-modern",
          component: () =>
            import("@/view/Pages/Authentication/sign-up/auth-signup-modern.vue"),
        },
        {
          path: "auth-signup-creative",
          name: "auth-signup-creative",
          component: () =>
            import(
              "@/view/Pages/Authentication/sign-up/auth-signup-creative.vue"
            ),
        },
        {
          path: "auth-forgot-password-basic",
          name: "auth-forgot-password-basic",
          component: () =>
            import(
              "@/view/Pages/Authentication/forgot-password/auth-forgot-password-basic.vue"
            ),
        },
        {
          path: "auth-forgot-password-modern",
          name: "auth-forgot-password-modern",
          component: () =>
            import(
              "@/view/Pages/Authentication/forgot-password/auth-forgot-password-modern.vue"
            ),
        },
        {
          path: "auth-forgot-password-creative",
          name: "auth-forgot-password-creative",
          component: () =>
            import(
              "@/view/Pages/Authentication/forgot-password/auth-forgot-password-creative.vue"
            ),
        },
        {
          path: "auth-two-step-verification-basic",
          name: "auth-two-step-verification-basic",
          component: () =>
            import(
              "@/view/Pages/Authentication/tow-step-verifications/auth-two-step-verification-basic.vue"
            ),
        },
        {
          path: "auth-two-step-verification-modern",
          name: "auth-two-step-verification-modern",
          component: () =>
            import(
              "@/view/Pages/Authentication/tow-step-verifications/auth-two-step-verification-modern.vue"
            ),
        },
        {
          path: "auth-two-step-verification-creative",
          name: "auth-two-step-verification-creative",
          component: () =>
            import(
              "@/view/Pages/Authentication/tow-step-verifications/auth-two-step-verification-creative.vue"
            ),
        },
        {
          path: "auth-reset-password-basic",
          name: "auth-reset-password-basic",
          component: () =>
            import(
              "@/view/Pages/Authentication/reset-password/auth-reset-password-basic.vue"
            ),
        },
        {
          path: "auth-reset-password-modern",
          name: "auth-reset-password-modern",
          component: () =>
            import(
              "@/view/Pages/Authentication/reset-password/auth-reset-password-modern.vue"
            ),
        },
        {
          path: "auth-reset-password-creative",
          name: "auth-reset-password-creative",
          component: () =>
            import(
              "@/view/Pages/Authentication/reset-password/auth-reset-password-creative.vue"
            ),
        },
        {
          path: "auth-successful-password-basic",
          name: "auth-successful-password-basic",
          component: () =>
            import(
              "@/view/Pages/Authentication/successful-password/auth-successful-password-basic.vue"
            ),
        },
        {
          path: "auth-successful-password-modern",
          name: "auth-successful-password-modern",
          component: () =>
            import(
              "@/view/Pages/Authentication/successful-password/auth-successful-password-modern.vue"
            ),
        },
        {
          path: "auth-successful-password-creative",
          name: "auth-successful-password-creative",
          component: () =>
            import(
              "@/view/Pages/Authentication/successful-password/auth-successful-password-creative.vue"
            ),
        },
        {
          path: "auth-account-deactivation-basic",
          name: "auth-account-deactivation-basic",
          component: () =>
            import(
              "@/view/Pages/Authentication/account-deactivation/auth-account-deactivation-basic.vue"
            ),
        },
        {
          path: "auth-account-deactivation-modern",
          name: "auth-account-deactivation-modern",
          component: () =>
            import(
              "@/view/Pages/Authentication/account-deactivation/auth-account-deactivation-modern.vue"
            ),
        },
        {
          path: "auth-account-deactivation-creative",
          name: "auth-account-deactivation-creative",
          component: () =>
            import(
              "@/view/Pages/Authentication/account-deactivation/auth-account-deactivation-creative.vue"
            ),
        },
        {
          path: "pages-contact-us",
          name: "pages-contact-us",
          component: () => import("@/view/Pages/pages/contact-us/index.vue"),
        },
        {
          path: "pages-contact-us-two",
          name: "pages-contact-us-two",
          component: () =>
            import("@/view/Pages/pages/contact-us/pages-contact-us-two.vue"),
        },
        {
          path: "pages-contact-us-three",
          name: "pages-contact-us-three",
          component: () =>
            import("@/view/Pages/pages/contact-us/pages-contact-us-three.vue"),
        },
        {
          path: "pages-contact-us-four",
          name: "pages-contact-us-four",
          component: () =>
            import("@/view/Pages/pages/contact-us/pages-contact-us-four.vue"),
        },
        {
          path: "pages-contact-us-five",
          name: "pages-contact-us-five",
          component: () =>
            import("@/view/Pages/pages/contact-us/pages-contact-us-five.vue"),
        },
        {
          path: "pages-coming-soon",
          name: "pages-coming-soon",
          component: () => import("@/view/Pages/pages/pages-coming-soon.vue"),
        },
        {
          path: "pages-maintenance",
          name: "pages-maintenance",
          component: () => import("@/view/Pages/pages/pages-maintenance.vue"),
        },
        {
          path: "pages-404",
          name: "pages-404",
          component: () => import("@/view/Pages/pages/error-pages/page-404.vue"),
        },
        {
          path: "/:pathMatch(.*)",
          component: () => import("@/view/Pages/pages/error-pages/page-404.vue"),
        },
        {
          path: "pages-500",
          name: "pages-500",
          component: () => import("@/view/Pages/pages/error-pages/page-500.vue"),
        },
      ],
    },
  
    // Landing Dashboard
    {
      path: "",
      children: [
        {
          path: "landing-ecommerce",
          component: () =>
            import("@/view/dashboards/landing-page/landing-ecommerce/index.vue"),
        },
        {
          path: "landing-email",
          component: () =>
            import("@/view/dashboards/landing-page/landing-email/index.vue"),
        },
        {
          path: "landing-invoice",
          component: () =>
            import("@/view/dashboards/landing-page/landing-invoice/index.vue"),
        },
        {
          path: "landing-school",
          component: () =>
            import("@/view/dashboards/landing-page/landing-school/index.vue"),
        },
        {
          path: "landing-doctors",
          component: () =>
            import("@/view/dashboards/landing-page/landing-doctors/index.vue"),
        },
      ],
    },
  ];

  export default routes;