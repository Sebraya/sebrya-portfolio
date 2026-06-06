export default function Projects() {
  return (
    <section>
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>

      <div className="space-y-4">
        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">Serverless Document Processor</h3>
          <p className="text-gray-600">
            AWS-based system using Lambda, S3, and DynamoDB for automated workflows.
          </p>
        </div>

        <div className="border p-4 rounded-lg">
          <h3 className="font-bold">AI Workflow Assistant</h3>
          <p className="text-gray-600">
            AI-powered automation system for business task processing.
          </p>
        </div>
      </div>
    </section>
  )
}
