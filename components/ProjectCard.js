import styles from '../styles/ProjectCard.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import { FaCode, FaDesktop } from 'react-icons/fa';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, BsRecordCircleFill } from 'react-icons/bs';
import { VscCircleOutline, VscCircleFilled } from 'react-icons/vsc';
import { BiChevronRight, BiChevronDown } from 'react-icons/bi';
import { MdOpenInNew } from 'react-icons/md';

const ProjectCard = ({ title, gallery, link, source, description, techsUsed, features }) => {
  const [showMore, setShowMore] = useState(true);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [previewActionHover, setPreviewActionHover] = useState(false);

  const GalleryIndicator = ({ active }) => active ? <VscCircleFilled /> : <VscCircleOutline />;

  return (
    <div className={styles.container}>
      <header className={styles.header}>{title}</header>
      
      <article className={styles.content}>
        {gallery &&
          <div className={styles.gallery}>
            <div className={styles.galleryItemContainer}>
              {gallery[galleryIndex].includes(".mp4")
                ? (
                  <video
                    className={styles.galleryItem}
                    autoPlay="autoplay"
                    loop="loop"
                    muted="muted"
                    // width="450" height="316"
                  >
                    <source src={gallery[galleryIndex]} type="video/mp4" />
                  </video>
                ) : (
                  <Image
                    className={styles.galleryItem}
                    src={gallery[galleryIndex]}
                    alt=""
                    width={370}
                    height={260}
                    layout="responsive"
                  />
                  // html img
                )
              }
            </div>

            <div className={styles.galleryBtns}>
              <div className={styles.galleryBtnContainer}
                onClick={() => setGalleryIndex((galleryIndex ? galleryIndex : gallery.length) - 1)}
              >
                <BsArrowLeftCircleFill className={styles.galleryBtn} />
              </div>
              <div className={styles.galleryBtnContainer}
                onClick={() => setGalleryIndex(galleryIndex + 1 === gallery.length ? 0 : galleryIndex + 1)}
              >
                <BsArrowRightCircleFill className={styles.galleryBtn} />
              </div>
            </div>

            <div className={styles.galleryIndicator}>
              {gallery.map((_, i) => 
                <GalleryIndicator
                  onClick={() => setGalleryIndex(i)}
                  key={i}
                  active={galleryIndex === i}
                />)}
            </div>
          </div>
        }

        <div className={styles.actions}>
          {link && <a className={`${styles.action} ${styles.actionPreview}`} href={link} target="_blank"
            onMouseEnter={() => setPreviewActionHover(true)}
            onMouseLeave={() => setPreviewActionHover(false)}
          >
            {previewActionHover
              ? <MdOpenInNew className={styles.icon} />
              : <FaDesktop className={styles.icon} />  
            }
            <span>Live Preview</span>
          </a>}

          <a className={`${styles.action} ${styles.actionSource}`} href={source} target="_blank">
            <FaCode className={styles.icon} />
            <span>Source Code</span>
          </a>
        </div>

        <p className={styles.description}>{description}</p>

        {/* show more/less button (use state) & add icon */}
        <span className={styles.showMore}
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? <BiChevronDown /> : <BiChevronRight />}
          {`Show ${showMore ? "less" : "more"}`}
        </span>

        <div className={showMore ? styles.more : styles.hide}>
          <div>
            <h2 className={styles.infoH2}>Technologies used</h2>
            <ul className={styles.infoList}>{techsUsed.map(tech => <li key={tech}><span><BsRecordCircleFill /></span><span>{tech}</span></li>)}</ul>
          </div>
          <div>
            <h2 className={styles.infoH2}>Notable features</h2>
            <ul className={styles.infoList}>{features.map(feature => <li key={feature}><span><BsRecordCircleFill /></span><span>{feature}</span></li>)}</ul>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ProjectCard