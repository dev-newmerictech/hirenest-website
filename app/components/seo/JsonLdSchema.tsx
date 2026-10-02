// app/components/seo/JsonLdSchema.tsx

/**
 * JSON-LD Schema Component
 * Renders schema.org structured data as JSON-LD script tags
 */

interface SchemaProps {
    schemas: Record<string, any>[]
}

/**
 * Renders multiple schemas as JSON-LD script tags
 */
export function JsonLdSchema({ schemas }: SchemaProps) {
    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={index}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    )
}

/**
 * Single schema renderer
 */
interface SingleSchemaProps {
    schema: Record<string, any>
}

export function SingleJsonLdSchema({ schema }: SingleSchemaProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    )
}
