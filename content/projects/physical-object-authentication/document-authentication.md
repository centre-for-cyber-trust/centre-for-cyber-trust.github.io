---
title: "Physical Object Authentication"
date: 2024-01-18T09:37:06+01:00
description: "How to protect documents through the whole life-cycle?"
categories:
  - project
---


For a long time, physical paper has been one of the main ways to store information. Nevertheless, given a paper document, it has always been a challenge to verify that its content is legit. To address this, some primitive solutions were used, like official signatures or stamps that certify the document's authenticity. Notice that these elements do not ensure that the paper’s content has not been modified after it was issued. More recently, with the emergence of the digital era, many physical documents have been digitalized and protected by means of cryptographic techniques. However, this protection is lost when the document is converted from the digital world to the physical world, for example, when the document is printed. Furthermore, physical documents are still used in a wide range of scenarios, particularly for legal reasons. Having said that, the goal of this project is to develop accurate tools that make the authentication of physical documents easy. Our approach takes advantage of computer vision and cryptographic techniques to automate the detection of potential subtle changes in a document. 

{{< paige/figure float="end" >}}
{{< paige/image class="object-fit-cover rounded-4" src="/images/object_authentication/wss_website_document_authentication.png" width="20rem" >}}
{{< /paige/figure >}}
  
The content authentication of a physical document is a challenge by itself. First, because it is natural for a paper document to have changes over time that do not change the semantics of the document. For instance, the document could have been folded or had some small stains of coffee accidentally spilled over it. Consequently, the detection of only semantic-changing modifications is highly difficult. Second, since we are interested in using conventional smartphone cameras to perform change detection, there is an inherent challenge in how the camera captures the document. In this regard, the picture of the document could have been taken in challenging conditions, such as low-light environment, slightly crumpled pages, diverse camera positions, and complex backgrounds. Considering these challenges, we have developed an algorithm that is able to detect document forgery and tampering, highlighting the regions in the document that have been tampered with since the document was issued. 

In order to ensure that the algorithm's functionality is accessible to a broad demographic, we have developed an iOS and Android mobile application that enables users to authenticate physical documents. This application enables users to effortlessly scan documents in uncontrolled environments using the camera on their smartphone. The application emphasizes potential forgeries and permits users to compare the scanned document to the original document once the document has been scanned. The accuracy of our algorithm has been evaluated using hundreds of scanned documents across multiple scenarios. This evaluation demonstrated the robustness of our method against adversaries, including those capable of generating highly subtle semantic changes. It is essential to emphasize that the new mobile version is ten times quicker than the original web version. 

Due to the user-friendly nature and exceptional precision of our algorithm, we established a collaborative partnership with the municipality of Zurich to provide our application as a service—a mechanism by which citizens could verify the authenticity of documents issued by the government. At present, the collaborative effort is centered on the verification of the debt collection registry, also known as Betreibungregistersauszug. The official release of our application is anticipated to occur during the first quarter of 2024. 

## Project Members

- David Basin (ETH Zurich)
- Jesus Solano (ETH Zurich)
