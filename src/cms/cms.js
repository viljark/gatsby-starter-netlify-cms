import CMS from 'netlify-cms'

import GalleryPagePreview from './preview-templates/GalleryPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('galerii', GalleryPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('avaleht', IndexPagePreview)
window.UPLOADCARE_LOCALE = 'et';