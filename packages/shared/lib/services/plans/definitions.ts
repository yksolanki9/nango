import type { PlanDefinition } from '@nangohq/types';

export const plansList: PlanDefinition[] = [
    {
        code: 'free',
        title: 'Free',
        description: 'API authorization only.',
        canUpgrade: true,
        canDowngrade: false,
        orbId: 'free',
        flags: {
            api_rate_limit_size: 'm',
            connection_with_scripts_max: null,
            environments_max: 2,
            has_otel: false,
            has_sync_variants: false,
            connections_max: 10,
            name: 'free',
            sync_frequency_secs_min: 3600,
            auto_idle: true
        }
    },
    {
        code: 'yc',
        title: 'YC Plan',
        description: 'For our friends at YC.',
        canUpgrade: true,
        canDowngrade: false,
        cta: 'Contact Us',
        hidden: true,
        orbId: 'yc',
        flags: {
            api_rate_limit_size: 'l',
            connection_with_scripts_max: null,
            environments_max: 3,
            has_otel: false,
            has_sync_variants: true,
            name: 'yc',
            sync_frequency_secs_min: 30,
            auto_idle: false
        }
    },
    {
        code: 'growth',
        title: 'Growth',
        description: 'Pay-as-you-go integrations.',
        canUpgrade: true,
        canDowngrade: false,
        orbId: 'growth',
        flags: {
            api_rate_limit_size: 'l',
            connection_with_scripts_max: null,
            environments_max: 3,
            has_otel: false,
            has_sync_variants: true,
            name: 'growth',
            sync_frequency_secs_min: 30,
            auto_idle: false
        }
    },
    {
        code: 'enterprise',
        title: 'Enterprise',
        description: 'Tailored to your scale.',
        canUpgrade: false,
        canDowngrade: false,
        cta: 'Contact Us',
        orbId: 'enterprise',
        flags: {
            api_rate_limit_size: '2xl',
            connection_with_scripts_max: null,
            environments_max: 10,
            has_otel: true,
            has_sync_variants: true,
            name: 'enterprise',
            sync_frequency_secs_min: 30,
            auto_idle: false
        }
    },
    {
        code: 'internal',
        title: 'Internal',
        description: 'Congrats, you are an insider.',
        canUpgrade: false,
        canDowngrade: false,
        cta: 'Contact Us',
        hidden: true,
        orbId: 'internal',
        flags: {
            api_rate_limit_size: 'l',
            connection_with_scripts_max: null,
            environments_max: 3,
            has_otel: false,
            has_sync_variants: false,
            name: 'yc',
            sync_frequency_secs_min: 30,
            auto_idle: false
        }
    },

    // Old plans
    {
        code: 'starter',
        title: 'Starter',
        description: 'Tailored to your scale.',
        canUpgrade: false,
        canDowngrade: false,
        hidden: true,
        flags: {
            api_rate_limit_size: 'l',
            connection_with_scripts_max: null,
            environments_max: 3,
            has_otel: false,
            has_sync_variants: true,
            name: 'starter',
            sync_frequency_secs_min: 30,
            auto_idle: false
        }
    },
    {
        code: 'scale',
        title: 'Scale',
        description: 'Tailored to your scale.',
        canUpgrade: false,
        canDowngrade: false,
        hidden: true,
        flags: {
            api_rate_limit_size: 'l',
            connection_with_scripts_max: null,
            environments_max: 3,
            has_otel: false,
            has_sync_variants: true,
            name: 'scale',
            sync_frequency_secs_min: 30,
            auto_idle: false
        }
    }
];
